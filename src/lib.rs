use pyo3::prelude::*;
use pyo3::types::PyBytes;
use pyo3::wrap_pyfunction;

use milagro_bls::{PublicKey, SecretKey, Signature};

#[pyfunction]
fn privtopub(_py: Python, k: Py<PyBytes>) -> PyObject {
    let k_obj = k.to_object(_py);
    let k_bytes = k_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sk = SecretKey::from_bytes(k_bytes).unwrap();
    let pk = PublicKey::from_secret_key(&sk);
    let obj = PyBytes::new(_py, pk.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn sign(_py: Python, msg: Py<PyBytes>, k: Py<PyBytes>, domain: u64) -> PyObject {
    let k_obj = k.to_object(_py);
    let k_bytes = k_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let msg_obj = msg.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sk = SecretKey::from_bytes(k_bytes).unwrap();
    let sig = Signature::new(msg_bytes, domain, &sk);
    let obj = PyBytes::new(_py, sig.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn verify(
    _py: Python,
    msg: Py<PyBytes>,
    pubkey: Py<PyBytes>,
    signature: Py<PyBytes>,
    domain: u64,
) -> bool {
    let msg_obj = msg.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let pubkey_obj = pubkey.to_object(_py);
    let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sig_obj = signature.to_object(_py);
    let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let pk = PublicKey::from_bytes(pubkey_bytes).unwrap();
    let sig = Signature::from_bytes(sig_bytes).unwrap();
    return sig.verify(msg_bytes, domain, &pk);
}

/// This module is a python module implemented in Rust.
#[pymodule]
fn milagro_bls_binding(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_wrapped(wrap_pyfunction!(privtopub))?;
    m.add_wrapped(wrap_pyfunction!(sign))?;
    m.add_wrapped(wrap_pyfunction!(verify))?;
    Ok(())
}
