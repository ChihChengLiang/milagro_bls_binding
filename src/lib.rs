#![allow(non_snake_case)]

use pyo3::exceptions::PyValueError;
use pyo3::prelude::*;
use pyo3::types::{PyBytes, PyList};

use milagro_bls::{
    AggregatePublicKey, AggregateSignature, AmclError, PublicKey, SecretKey, Signature,
};

fn to_py_err(e: AmclError) -> PyErr {
    PyValueError::new_err(format!("{:?}", e))
}

#[pyfunction]
fn SkToPk(py: Python<'_>, SK: &Bound<'_, PyBytes>) -> PyResult<Py<PyBytes>> {
    SecretKey::from_bytes(SK.as_bytes())
        .map_err(to_py_err)
        .map(|sk| PublicKey::from_secret_key(&sk).as_bytes())
        .map(|pk| PyBytes::new(py, &pk).unbind())
}

#[pyfunction]
fn Sign(
    py: Python<'_>,
    SK: &Bound<'_, PyBytes>,
    message: &Bound<'_, PyBytes>,
) -> PyResult<Py<PyBytes>> {
    SecretKey::from_bytes(SK.as_bytes())
        .map_err(to_py_err)
        .map(|sk| Signature::new(message.as_bytes(), &sk).as_bytes())
        .map(|sig| PyBytes::new(py, &sig).unbind())
}

#[pyfunction]
fn Verify(
    _py: Python<'_>,
    PK: &Bound<'_, PyBytes>,
    message: &Bound<'_, PyBytes>,
    signature: &Bound<'_, PyBytes>,
) -> bool {
    PublicKey::from_bytes(PK.as_bytes())
        .map_err(to_py_err)
        .and_then(|pk| {
            let sig = Signature::from_bytes(signature.as_bytes()).map_err(to_py_err)?;
            Ok(sig.verify(message.as_bytes(), &pk))
        })
        .unwrap_or(false)
}

#[pyfunction]
fn Aggregate(py: Python<'_>, signatures: &Bound<'_, PyList>) -> PyResult<Py<PyBytes>> {
    let agg_sig = signatures
        .iter()
        .map(|sig| {
            let bytes: Vec<u8> = sig.extract()?;
            Signature::from_bytes(&bytes).map_err(to_py_err)
        })
        .collect::<Result<Vec<Signature>, _>>()?
        .iter()
        .fold(AggregateSignature::new(), |mut agg_sig, sig| {
            agg_sig.add(sig);
            agg_sig
        });
    Ok(PyBytes::new(py, agg_sig.as_bytes().as_ref()).unbind())
}

#[pyfunction]
fn _AggregatePKs(py: Python<'_>, PKs: &Bound<'_, PyList>) -> PyResult<Py<PyBytes>> {
    PKs.iter()
        .map(|pubkey| {
            let bytes: Vec<u8> = pubkey.extract()?;
            PublicKey::from_bytes(&bytes).map_err(to_py_err)
        })
        .collect::<Result<Vec<PublicKey>, PyErr>>()
        .and_then(|pks| AggregatePublicKey::into_aggregate(&pks).map_err(to_py_err))
        .map(|agg| PublicKey { point: agg.point }.as_bytes())
        .map(|agg_pub| PyBytes::new(py, &agg_pub).unbind())
}

#[pyfunction]
fn FastAggregateVerify(
    _py: Python<'_>,
    PKs: &Bound<'_, PyList>,
    message: &Bound<'_, PyBytes>,
    signature: &Bound<'_, PyBytes>,
) -> bool {
    PKs.iter()
        .map(|pubkey| {
            let bytes: Vec<u8> = pubkey.extract()?;
            PublicKey::from_bytes(&bytes).map_err(to_py_err)
        })
        .collect::<Result<Vec<PublicKey>, PyErr>>()
        .and_then(|pks| {
            Ok(AggregateSignature::from_bytes(signature.as_bytes())
                .map_err(to_py_err)?
                .fast_aggregate_verify(
                    message.as_bytes(),
                    &pks.iter().collect::<Vec<&PublicKey>>(),
                ))
        })
        .unwrap_or(false)
}

#[pyfunction]
fn AggregateVerify(
    _py: Python<'_>,
    PKs: &Bound<'_, PyList>,
    messages: &Bound<'_, PyList>,
    signature: &Bound<'_, PyBytes>,
) -> bool {
    PKs.iter()
        .map(|pubkey| {
            let bytes: Vec<u8> = pubkey.extract()?;
            PublicKey::from_bytes(&bytes).map_err(to_py_err)
        })
        .collect::<Result<Vec<PublicKey>, PyErr>>()
        .and_then(|pks| {
            let msgs = messages
                .iter()
                .map(|msg| msg.extract())
                .collect::<Result<Vec<Vec<u8>>, PyErr>>()?;
            Ok(AggregateSignature::from_bytes(signature.as_bytes())
                .map_err(to_py_err)?
                .aggregate_verify(
                    &msgs
                        .iter()
                        .map(|msg| msg.as_slice())
                        .collect::<Vec<&[u8]>>(),
                    &pks.iter().collect::<Vec<&PublicKey>>(),
                ))
        })
        .unwrap_or(false)
}

#[pyfunction]
fn VerifyMultipleAggregateSignatures(_py: Python<'_>, SignatureSets: &Bound<'_, PyList>) -> bool {
    SignatureSets
        .iter()
        .map(|set| {
            let tuple: Vec<Vec<u8>> = set.extract()?;
            let aggsig = AggregateSignature::from_bytes(&tuple[0]).map_err(to_py_err)?;
            let aggkey = AggregatePublicKey::from_public_key(
                &PublicKey::from_bytes(&tuple[1]).map_err(to_py_err)?,
            );
            Ok((aggsig, aggkey, tuple[2].clone()))
        })
        .collect::<Result<Vec<(AggregateSignature, AggregatePublicKey, Vec<u8>)>, PyErr>>()
        .map(|signature_sets| {
            AggregateSignature::verify_multiple_aggregate_signatures(
                &mut rand::thread_rng(),
                signature_sets.iter().map(|x| (&x.0, &x.1, x.2.as_slice())),
            )
        })
        .unwrap_or(false)
}

/// This module is a python module implemented in Rust.
#[pymodule]
fn milagro_bls_binding(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.py().import("warnings")?.call_method1(
        "warn",
        (
            "milagro_bls_binding is deprecated and no longer maintained.",
            m.py().get_type::<pyo3::exceptions::PyDeprecationWarning>(),
            2i32,
        ),
    )?;
    m.add("__version__", env!("CARGO_PKG_VERSION"))?;
    m.add_function(wrap_pyfunction!(SkToPk, m)?)?;
    m.add_function(wrap_pyfunction!(Sign, m)?)?;
    m.add_function(wrap_pyfunction!(Verify, m)?)?;
    m.add_function(wrap_pyfunction!(Aggregate, m)?)?;
    m.add_function(wrap_pyfunction!(_AggregatePKs, m)?)?;
    m.add_function(wrap_pyfunction!(FastAggregateVerify, m)?)?;
    m.add_function(wrap_pyfunction!(AggregateVerify, m)?)?;
    m.add_function(wrap_pyfunction!(VerifyMultipleAggregateSignatures, m)?)?;
    Ok(())
}
