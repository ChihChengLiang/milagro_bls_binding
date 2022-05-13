#![allow(non_snake_case)]

use pyo3::exceptions::PyValueError;
use pyo3::prelude::*;
use pyo3::types::{PyBytes, PyList};
use pyo3::wrap_pyfunction;

use milagro_bls::{
    AggregatePublicKey, AggregateSignature, AmclError, PublicKey, SecretKey, Signature,
};

fn to_py_err(e: AmclError) -> PyErr {
    PyValueError::new_err(format!("{:?}", e))
}

#[pyfunction]
fn SkToPk(_py: Python, SK: &PyBytes) -> PyResult<PyObject> {
    SecretKey::from_bytes(SK.extract()?)
        .map_err(to_py_err)
        .map(|sk| PublicKey::from_secret_key(&sk).as_bytes())
        .map(|pk| PyBytes::new(_py, &pk).to_object(_py))
}

#[pyfunction]
fn Sign(_py: Python, SK: &PyBytes, message: &PyBytes) -> PyResult<PyObject> {
    SecretKey::from_bytes(SK.extract()?)
        .map_err(to_py_err)
        .and_then(|sk| Ok(Signature::new(message.extract()?, &sk).as_bytes()))
        .map(|sig| PyBytes::new(_py, &sig).to_object(_py))
}

#[pyfunction]
fn Verify(_py: Python, PK: &PyBytes, message: &PyBytes, signature: &PyBytes) -> bool {
    PK.extract()
        .and_then(|pk| PublicKey::from_bytes(pk).map_err(to_py_err))
        .and_then(|pk| {
            let sig = Signature::from_bytes(signature.extract()?).map_err(to_py_err)?;
            Ok(sig.verify(message.extract()?, &pk))
        })
        .unwrap_or(false)
}

#[pyfunction]
fn Aggregate(_py: Python, signatures: &PyList) -> PyResult<PyObject> {
    let agg_sig = signatures
        .iter()
        .map(|sig| Signature::from_bytes(sig.extract()?).map_err(to_py_err))
        .collect::<Result<Vec<Signature>, _>>()?
        .iter()
        .fold(AggregateSignature::new(), |mut agg_sig, sig| {
            agg_sig.add(sig);
            agg_sig
        });
    Ok(PyBytes::new(_py, agg_sig.as_bytes().as_ref()).to_object(_py))
}

#[pyfunction]
fn _AggregatePKs(_py: Python, PKs: &PyList) -> PyResult<PyObject> {
    PKs.iter()
        .map(|pubkey| PublicKey::from_bytes(pubkey.extract()?).map_err(to_py_err))
        .collect::<Result<Vec<PublicKey>, PyErr>>()
        .and_then(|pks| AggregatePublicKey::into_aggregate(&pks).map_err(to_py_err))
        .map(|agg| PublicKey { point: agg.point }.as_bytes())
        .map(|agg_pub| PyBytes::new(_py, &agg_pub).to_object(_py))
}

#[pyfunction]
fn FastAggregateVerify(_py: Python, PKs: &PyList, message: &PyBytes, signature: &PyBytes) -> bool {
    PKs.iter()
        .map(|pubkey| PublicKey::from_bytes(pubkey.extract()?).map_err(to_py_err))
        .collect::<Result<Vec<PublicKey>, PyErr>>()
        .and_then(|pks| {
            Ok(AggregateSignature::from_bytes(signature.extract()?)
                .map_err(to_py_err)?
                .fast_aggregate_verify(
                    message.extract()?,
                    &pks.iter().collect::<Vec<&PublicKey>>(),
                ))
        })
        .unwrap_or(false)
}

#[pyfunction]
fn AggregateVerify(_py: Python, PKs: &PyList, messages: &PyList, signature: &PyBytes) -> bool {
    PKs.iter()
        .map(|pubkey| PublicKey::from_bytes(pubkey.extract()?).map_err(to_py_err))
        .collect::<Result<Vec<PublicKey>, PyErr>>()
        .and_then(|pks| {
            let msgs = messages
                .iter()
                .map(|msg| msg.extract())
                .collect::<Result<Vec<Vec<u8>>, PyErr>>()?;
            Ok(AggregateSignature::from_bytes(signature.extract()?)
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
fn VerifyMultipleAggregateSignatures(_py: Python, SignatureSets: &PyList) -> bool {
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
fn milagro_bls_binding(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add("__version__", env!("CARGO_PKG_VERSION"))?;
    m.add_wrapped(wrap_pyfunction!(SkToPk))?;
    m.add_wrapped(wrap_pyfunction!(Sign))?;
    m.add_wrapped(wrap_pyfunction!(Verify))?;
    m.add_wrapped(wrap_pyfunction!(Aggregate))?;
    m.add_wrapped(wrap_pyfunction!(_AggregatePKs))?;
    m.add_wrapped(wrap_pyfunction!(FastAggregateVerify))?;
    m.add_wrapped(wrap_pyfunction!(AggregateVerify))?;
    m.add_wrapped(wrap_pyfunction!(VerifyMultipleAggregateSignatures))?;
    Ok(())
}
