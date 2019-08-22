use pyo3::prelude::*;
use pyo3::types::{PyBytes, PyList};
use pyo3::wrap_pyfunction;

use milagro_bls::{AggregatePublicKey, AggregateSignature, PublicKey, SecretKey, Signature};

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
fn sign(_py: Python, message_hashes: Py<PyBytes>, k: Py<PyBytes>, domain: u64) -> PyObject {
    let k_obj = k.to_object(_py);
    let k_bytes = k_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let msg_obj = message_hashes.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sk = SecretKey::from_bytes(k_bytes).unwrap();
    let sig = Signature::new(msg_bytes, domain, &sk);
    let obj = PyBytes::new(_py, sig.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn verify(
    _py: Python,
    message_hashes: Py<PyBytes>,
    pubkey: Py<PyBytes>,
    signature: Py<PyBytes>,
    domain: u64,
) -> bool {
    let msg_obj = message_hashes.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let pubkey_obj = pubkey.to_object(_py);
    let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let pk = match PublicKey::from_bytes(pubkey_bytes) {
        Ok(pk) => pk,
        Err(_) => return false,
    };
    let sig_obj = signature.to_object(_py);
    let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sig = match Signature::from_bytes(sig_bytes) {
        Ok(sig) => sig,
        Err(_) => return false,
    };
    return sig.verify(msg_bytes, domain, &pk);
}

#[pyfunction]
fn aggregate_signatures(_py: Python, signatures: &PyList) -> PyObject {
    let mut agg_sig = AggregateSignature::new();
    let sigs: Vec<Signature> = signatures
        .iter()
        .map(|sig| {
            let sig_obj = sig.to_object(_py);
            let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
            return Signature::from_bytes(sig_bytes).unwrap();
        })
        .collect();
    for sig in &sigs {
        agg_sig.add(sig);
    }
    let obj = PyBytes::new(_py, agg_sig.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn aggregate_pubkeys(_py: Python, pubkeys: &PyList) -> PyObject {
    let pks: Vec<PublicKey> = pubkeys
        .iter()
        .map(|pubkey| {
            let pubkey_obj = pubkey.to_object(_py);
            let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
            return PublicKey::from_bytes(pubkey_bytes).unwrap();
        })
        .collect();
    let pks_ref: Vec<&PublicKey> = pks.iter().collect();
    let agg_pub = AggregatePublicKey::from_public_keys(&pks_ref);
    let obj = PyBytes::new(_py, agg_pub.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn verify_multiple(
    _py: Python,
    pubkeys: &PyList,
    message_hashes: &PyList,
    signature: Py<PyBytes>,
    domain: u64,
) -> bool {
    let mut msg: Vec<u8> = vec![];
    for message in message_hashes {
        let msg_obj = message.to_object(_py);
        let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
        msg.extend_from_slice(msg_bytes);
    }
    let sig_obj = signature.to_object(_py);
    let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let agg_sig = match AggregateSignature::from_bytes(sig_bytes) {
        Ok(agg_sig) => agg_sig,
        Err(_) => return false,
    };
    let mut pks: Vec<AggregatePublicKey> = vec![];

    for pk in pubkeys {
        let pubkey_obj = pk.to_object(_py);
        let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
        let aggpk = match AggregatePublicKey::from_bytes(pubkey_bytes) {
            Ok(agg_pk) => agg_pk,
            Err(_) => return false,
        };
        pks.push(aggpk);
    }
    let pks_ref: Vec<&AggregatePublicKey> = pks.iter().collect();
    return agg_sig.verify_multiple(&msg[..], domain, &pks_ref);
}

/// This module is a python module implemented in Rust.
#[pymodule]
fn milagro_bls_binding(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add("__version__", env!("CARGO_PKG_VERSION"))?;
    m.add_wrapped(wrap_pyfunction!(privtopub))?;
    m.add_wrapped(wrap_pyfunction!(sign))?;
    m.add_wrapped(wrap_pyfunction!(verify))?;
    m.add_wrapped(wrap_pyfunction!(aggregate_signatures))?;
    m.add_wrapped(wrap_pyfunction!(aggregate_pubkeys))?;
    m.add_wrapped(wrap_pyfunction!(verify_multiple))?;
    Ok(())
}
