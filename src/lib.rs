#![allow(non_snake_case)]

use pyo3::exceptions::PyValueError;
use pyo3::prelude::*;
use pyo3::types::{PyBytes, PyList};
use pyo3::wrap_pyfunction;

use milagro_bls::{
    AggregatePublicKey, AggregateSignature, AmclError, PublicKey, SecretKey, Signature,
};

enum CommonError {
    ParsePyErr(PyErr),
    ParseAmclError(AmclError),
}
impl From<PyErr> for CommonError {
    fn from(err: PyErr) -> CommonError {
        CommonError::ParsePyErr(err)
    }
}

impl From<AmclError> for CommonError {
    fn from(err: AmclError) -> CommonError {
        CommonError::ParseAmclError(err)
    }
}

impl From<CommonError> for PyErr {
    fn from(err: CommonError) -> PyErr {
        match err {
            CommonError::ParsePyErr(PyErr) => PyErr,
            CommonError::ParseAmclError(x) => PyValueError::new_err(format!("{:?}", x)),
        }
    }
}

#[pyfunction]
fn SkToPk(_py: Python, SK: &PyBytes) -> PyResult<PyObject> {
    || -> Result<PyObject, CommonError> {
        let sk = SecretKey::from_bytes(SK.extract()?)?;
        let pk = PublicKey::from_secret_key(&sk).as_bytes();
        Ok(PyBytes::new(_py, &pk).to_object(_py))
    }()
    .map_err(|e| e.into())
}

#[pyfunction]
fn Sign(_py: Python, SK: &PyBytes, message: &PyBytes) -> PyResult<PyObject> {
    || -> Result<PyObject, CommonError> {
        let sk = SecretKey::from_bytes(SK.extract()?)?;
        let sig = Signature::new(message.extract()?, &sk).as_bytes();
        Ok(PyBytes::new(_py, &sig).to_object(_py))
    }()
    .map_err(|e| e.into())
}

#[pyfunction]
fn Verify(_py: Python, PK: &PyBytes, message: &PyBytes, signature: &PyBytes) -> bool {
    || -> Result<bool, CommonError> {
        let pk = PublicKey::from_bytes(PK.extract()?)?;
        let sig = Signature::from_bytes(signature.extract()?)?;
        Ok(sig.verify(message.extract()?, &pk))
    }()
    .unwrap_or(false)
}

#[pyfunction]
fn Aggregate(_py: Python, signatures: &PyList) -> PyResult<PyObject> {
    || -> Result<PyObject, CommonError> {
        let mut agg_sig = AggregateSignature::new();
        for sig in signatures {
            let sig = Signature::from_bytes(sig.extract()?)?;
            agg_sig.add(&sig);
        }
        Ok(PyBytes::new(_py, agg_sig.as_bytes().as_ref()).to_object(_py))
    }()
    .map_err(|e| e.into())
}

#[pyfunction]
fn _AggregatePKs(_py: Python, PKs: &PyList) -> PyResult<PyObject> {
    let pks: Result<Vec<PublicKey>, CommonError> = PKs
        .iter()
        .map(|pubkey| PublicKey::from_bytes(pubkey.extract()?).map_err(|e| e.into()))
        .collect();
    let aggregation =
        AggregatePublicKey::into_aggregate(&pks?).map_err(CommonError::ParseAmclError)?;
    let agg_pub = PublicKey {
        point: aggregation.point,
    }
    .as_bytes();
    Ok(PyBytes::new(_py, &agg_pub).to_object(_py))
}

#[pyfunction]
fn FastAggregateVerify(_py: Python, PKs: &PyList, message: &PyBytes, signature: &PyBytes) -> bool {
    || -> Result<bool, CommonError> {
        let pks = {
            let pks: Result<Vec<PublicKey>, CommonError> = PKs
                .iter()
                .map(|pubkey| PublicKey::from_bytes(pubkey.extract()?).map_err(|e| e.into()))
                .collect();
            pks?
        };
        let pks_ref: Vec<&PublicKey> = pks.iter().collect();
        let agg_sig = AggregateSignature::from_bytes(signature.extract()?)?;
        Ok(agg_sig.fast_aggregate_verify(message.extract()?, &pks_ref))
    }()
    .unwrap_or(false)
}

#[pyfunction]
fn AggregateVerify(_py: Python, PKs: &PyList, messages: &PyList, signature: &PyBytes) -> bool {
    || -> Result<bool, CommonError> {
        let pks = {
            let pks: Result<Vec<PublicKey>, CommonError> = PKs
                .iter()
                .map(|pubkey| PublicKey::from_bytes(pubkey.extract()?).map_err(|e| e.into()))
                .collect();
            pks?
        };
        let pks_ref: Vec<&PublicKey> = pks.iter().collect();
        let msgs = {
            let msgs: Result<Vec<Vec<u8>>, CommonError> = messages
                .iter()
                .map(|msg| msg.extract().map_err(|e| e.into()))
                .collect();
            msgs?
        };
        let msgs_refs: Vec<&[u8]> = msgs.iter().map(|msg| msg.as_slice()).collect();
        let agg_sig = AggregateSignature::from_bytes(signature.extract()?)?;
        Ok(agg_sig.aggregate_verify(&msgs_refs, &pks_ref))
    }()
    .unwrap_or(false)
}

#[pyfunction]
fn VerifyMultipleAggregateSignatures(_py: Python, SignatureSets: &PyList) -> bool {
    || -> Result<bool, CommonError> {
        let mut signature_sets: Vec<(AggregateSignature, AggregatePublicKey, Vec<u8>)> = Vec::new();
        for set in SignatureSets {
            let tuple: Vec<Vec<u8>> = set.extract()?;
            let aggsig = AggregateSignature::from_bytes(&tuple[0])?;
            let aggkey = AggregatePublicKey::from_public_key(&PublicKey::from_bytes(&tuple[1])?);
            signature_sets.push((aggsig, aggkey, tuple[2].clone()));
        }

        let mut rng = &mut rand::thread_rng();
        Ok(AggregateSignature::verify_multiple_aggregate_signatures(
            &mut rng,
            signature_sets.iter().map(|x| (&x.0, &x.1, x.2.as_slice())),
        ))
    }()
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
