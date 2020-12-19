#![allow(non_snake_case)]

use pyo3::exceptions::ValueError;
use pyo3::prelude::*;
use pyo3::types::{PyBytes, PyList};
use pyo3::wrap_pyfunction;

use milagro_bls::{AggregatePublicKey, AggregateSignature, PublicKey, SecretKey, Signature};

#[pyfunction]
fn SkToPk(_py: Python, SK: &PyBytes) -> PyResult<PyObject> {
    let sk_bytes: Vec<u8> = SK.extract()?;
    let sk = SecretKey::from_bytes(&sk_bytes)
        .map_err(|e| PyErr::new::<ValueError, _>(format!("Bad key: {:?}", e)))?;
    let pk = PublicKey::from_secret_key(&sk).as_bytes();
    Ok(PyBytes::new(_py, &pk).to_object(_py))
}

#[pyfunction]
fn Sign(_py: Python, SK: &PyBytes, message: &PyBytes) -> PyResult<PyObject> {
    let sk_bytes: Vec<u8> = SK.extract()?;
    let msg_bytes: Vec<u8> = message.extract()?;
    let sk = SecretKey::from_bytes(&sk_bytes)
        .map_err(|e| PyErr::new::<ValueError, _>(format!("Bad key: {:?}", e)))?;
    let sig = Signature::new(&msg_bytes, &sk).as_bytes();
    Ok(PyBytes::new(_py, &sig).to_object(_py))
}

#[pyfunction]
fn Verify(_py: Python, PK: &PyBytes, message: &PyBytes, signature: &PyBytes) -> bool {
    let pubkey_bytes: Vec<u8> = match PK.extract() {
        Ok(bytes) => bytes,
        Err(_) => return false,
    };
    let msg_bytes: Vec<u8> = match message.extract() {
        Ok(bytes) => bytes,
        Err(_) => return false,
    };
    let sig_bytes: Vec<u8> = match signature.extract() {
        Ok(bytes) => bytes,
        Err(_) => return false,
    };
    let pk = match PublicKey::from_bytes(&pubkey_bytes) {
        Ok(_pk) => _pk,
        Err(_) => return false,
    };
    let sig = match Signature::from_bytes(&sig_bytes) {
        Ok(_sig) => _sig,
        Err(_) => return false,
    };
    sig.verify(&msg_bytes, &pk)
}

#[pyfunction]
fn Aggregate(_py: Python, signatures: &PyList) -> PyResult<PyObject> {
    let mut agg_sig = AggregateSignature::new();
    for sig in signatures {
        let sig_bytes: Vec<u8> = sig.extract()?;
        let sig = Signature::from_bytes(&sig_bytes)
            .map_err(|e| PyErr::new::<ValueError, _>(format!("Bad Signature: {:?}", e)))?;
        agg_sig.add(&sig);
    }
    Ok(PyBytes::new(_py, agg_sig.as_bytes().as_ref()).to_object(_py))
}

#[pyfunction]
fn _AggregatePKs(_py: Python, PKs: &PyList) -> PyResult<PyObject> {
    let mut pks: Vec<PublicKey> = vec![];
    for pubkey in PKs {
        let pubkey_bytes = pubkey.extract()?;
        let pk = PublicKey::from_bytes(pubkey_bytes)
            .map_err(|e| PyErr::new::<ValueError, _>(format!("Bad Public Key: {:?}", e)))?;
        pks.push(pk);
    }
    let aggregation = AggregatePublicKey::into_aggregate(&pks)
        .map_err(|e| PyErr::new::<ValueError, _>(format!("Aggregation fail: {:?}", e)))?;
    let agg_pub = PublicKey {
        point: aggregation.point,
    }
    .as_bytes();
    Ok(PyBytes::new(_py, &agg_pub).to_object(_py))
}

#[pyfunction]
fn FastAggregateVerify(_py: Python, PKs: &PyList, message: &PyBytes, signature: &PyBytes) -> bool {
    let msg_bytes: Vec<u8> = match message.extract() {
        Ok(bytes) => bytes,
        Err(_) => return false,
    };
    let sig_bytes: Vec<u8> = match signature.extract() {
        Ok(bytes) => bytes,
        Err(_) => return false,
    };
    let agg_sig = match AggregateSignature::from_bytes(&sig_bytes) {
        Ok(_agg_sig) => _agg_sig,
        Err(_) => return false,
    };
    let mut pks: Vec<PublicKey> = vec![];

    for pk in PKs {
        let pubkey_bytes = match pk.extract() {
            Ok(bytes) => bytes,
            Err(_) => return false,
        };
        match PublicKey::from_bytes(pubkey_bytes) {
            Ok(_pk) => pks.push(_pk),
            Err(_) => return false,
        };
    }

    let pks_ref: Vec<&PublicKey> = pks.iter().collect();

    agg_sig.fast_aggregate_verify(&msg_bytes, &pks_ref)
}

#[pyfunction]
fn AggregateVerify(_py: Python, PKs: &PyList, messages: &PyList, signature: &PyBytes) -> bool {
    let sig_bytes: Vec<u8> = match signature.extract() {
        Ok(bytes) => bytes,
        Err(_) => return false,
    };
    let agg_sig = match AggregateSignature::from_bytes(&sig_bytes) {
        Ok(_agg_sig) => _agg_sig,
        Err(_) => return false,
    };

    let mut pks: Vec<PublicKey> = vec![];
    for pk in PKs {
        let pubkey_bytes = match pk.extract() {
            Ok(bytes) => bytes,
            Err(_) => return false,
        };
        match PublicKey::from_bytes(pubkey_bytes) {
            Ok(_pk) => pks.push(_pk),
            Err(_) => return false,
        };
    }
    let pks_ref: Vec<&PublicKey> = pks.iter().collect();

    let mut msgs: Vec<Vec<u8>> = vec![];
    for msg in messages {
        match msg.extract() {
            Ok(msg_bytes) => msgs.push(msg_bytes),
            Err(_) => return false,
        };
    }

    let msgs_refs: Vec<&[u8]> = msgs.iter().map(|x| x.as_slice()).collect();

    agg_sig.aggregate_verify(&msgs_refs, &pks_ref)
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
    Ok(())
}
