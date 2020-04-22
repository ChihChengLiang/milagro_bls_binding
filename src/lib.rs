use pyo3::exceptions::ValueError;
use pyo3::prelude::*;
use pyo3::types::{PyBytes, PyList};
use pyo3::wrap_pyfunction;

use milagro_bls::{AggregatePublicKey, AggregateSignature, PublicKey, SecretKey, Signature};

#[pyfunction]
fn PrivToPub(_py: Python, SK: Py<PyBytes>) -> PyResult<PyObject> {
    let sk_obj = SK.to_object(_py);
    let sk_bytes = sk_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sk = match SecretKey::from_bytes(sk_bytes) {
        Ok(_sk) => _sk,
        Err(_) => return Err(PyErr::new::<ValueError, &str>("Invalid Secrete Key")),
    };
    let pk = PublicKey::from_secret_key(&sk);
    let obj = PyBytes::new(_py, pk.as_bytes().as_ref());
    return Ok(obj.to_object(_py));
}

#[pyfunction]
fn Sign(_py: Python, SK: Py<PyBytes>, message: Py<PyBytes>) -> PyResult<PyObject> {
    let sk_obj = SK.to_object(_py);
    let sk_bytes = sk_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let msg_obj = message.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sk = match SecretKey::from_bytes(sk_bytes) {
        Ok(_sk) => _sk,
        Err(_) => return Err(PyErr::new::<ValueError, &str>("Invalid Secrete Key")),
    };
    let sig = Signature::new(msg_bytes, &sk);
    let obj = PyBytes::new(_py, sig.as_bytes().as_ref());
    return Ok(obj.to_object(_py));
}

#[pyfunction]
fn Verify(_py: Python, PK: Py<PyBytes>, message: Py<PyBytes>, signature: Py<PyBytes>) -> bool {
    let msg_obj = message.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let pubkey_obj = PK.to_object(_py);
    let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let pk = match PublicKey::from_bytes(pubkey_bytes) {
        Ok(_pk) => _pk,
        Err(_) => return false,
    };
    let sig_obj = signature.to_object(_py);
    let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sig = match Signature::from_bytes(sig_bytes) {
        Ok(_sig) => _sig,
        Err(_) => return false,
    };
    return sig.verify(msg_bytes, &pk);
}

#[pyfunction]
fn Aggregate(_py: Python, signatures: &PyList) -> PyObject {
    let mut agg_sig = AggregateSignature::new();
    signatures.iter().for_each(|sig| {
        let sig_obj = sig.to_object(_py);
        let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
        let sig = Signature::from_bytes(sig_bytes).unwrap();
        agg_sig.add(&sig);
    });
    let obj = PyBytes::new(_py, agg_sig.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn _AggregatePKs(_py: Python, pubkeys: &PyList) -> PyObject {
    let pks: Vec<PublicKey> = pubkeys
        .iter()
        .map(|pubkey| {
            let pubkey_obj = pubkey.to_object(_py);
            let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
            return PublicKey::from_bytes(pubkey_bytes).unwrap();
        })
        .collect();
    let pks_ref: Vec<&PublicKey> = pks.iter().collect();
    let agg_pub = AggregatePublicKey::aggregate(&pks_ref);
    let obj = PyBytes::new(_py, agg_pub.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn FastAggregateVerify(
    _py: Python,
    PKs: &PyList,
    message: Py<PyBytes>,
    signature: Py<PyBytes>,
) -> bool {
    let msg_obj = message.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();

    let sig_obj = signature.to_object(_py);
    let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let agg_sig = match AggregateSignature::from_bytes(sig_bytes) {
        Ok(_agg_sig) => _agg_sig,
        Err(_) => return false,
    };
    let mut pks: Vec<PublicKey> = vec![];

    for pk in PKs {
        let pubkey_obj = pk.to_object(_py);
        let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
        match PublicKey::from_bytes(pubkey_bytes) {
            Ok(_pk) => pks.push(_pk),
            Err(_) => return false,
        };
    }

    let pks_ref: Vec<&PublicKey> = pks.iter().collect();

    return agg_sig.fast_aggregate_verify(&msg_bytes, &pks_ref);
}

#[pyfunction]
fn AggregateVerify(_py: Python, pairs: &PyList, signature: Py<PyBytes>) -> bool {
    let sig_obj = signature.to_object(_py);
    let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let agg_sig = match AggregateSignature::from_bytes(sig_bytes) {
        Ok(_agg_sig) => _agg_sig,
        Err(_) => return false,
    };

    let mut pks: Vec<PublicKey> = vec![];
    let mut msgs: Vec<Vec<u8>> = vec![];
    pairs.iter().for_each(|pair| {
        let pubkey_obj = pair.get_item(0).unwrap().to_object(_py);
        let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
        let pk = PublicKey::from_bytes(pubkey_bytes).unwrap();

        let msg_obj = pair.get_item(1).unwrap().to_object(_py);
        let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes().to_vec();

        msgs.push(msg_bytes);
        pks.push(pk);
    });

    let msgs_refs: Vec<&[u8]> = msgs.iter().map(|x| x.as_slice()).collect();
    let pks_ref: Vec<&PublicKey> = pks.iter().map(|x| x).collect();

    return agg_sig.aggregate_verify(&msgs_refs, &pks_ref);
}

/// This module is a python module implemented in Rust.
#[pymodule]
fn milagro_bls_binding(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add("__version__", env!("CARGO_PKG_VERSION"))?;
    m.add_wrapped(wrap_pyfunction!(PrivToPub))?;
    m.add_wrapped(wrap_pyfunction!(Sign))?;
    m.add_wrapped(wrap_pyfunction!(Verify))?;
    m.add_wrapped(wrap_pyfunction!(Aggregate))?;
    m.add_wrapped(wrap_pyfunction!(_AggregatePKs))?;
    m.add_wrapped(wrap_pyfunction!(FastAggregateVerify))?;
    m.add_wrapped(wrap_pyfunction!(AggregateVerify))?;
    Ok(())
}
