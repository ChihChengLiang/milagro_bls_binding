use pyo3::prelude::*;
use pyo3::types::{PyBytes, PyList};
use pyo3::wrap_pyfunction;

use milagro_bls::{AggregatePublicKey, AggregateSignature, PublicKey, SecretKey, Signature};

#[pyfunction]
fn PrivToPub(_py: Python, SK: Py<PyBytes>) -> PyObject {
    let k_obj = SK.to_object(_py);
    let k_bytes = k_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sk = SecretKey::from_bytes(k_bytes).unwrap();
    let pk = PublicKey::from_secret_key(&sk);
    let obj = PyBytes::new(_py, pk.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn Sign(_py: Python, SK: Py<PyBytes>, message: Py<PyBytes>) -> PyObject {
    let sk_obj = SK.to_object(_py);
    let sk_bytes = sk_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let msg_obj = message.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let sk = SecretKey::from_bytes(sk_bytes).unwrap();
    let sig = Signature::new(msg_bytes, &sk);
    let obj = PyBytes::new(_py, sig.as_bytes().as_ref());
    return obj.to_object(_py);
}

#[pyfunction]
fn Verify(_py: Python, PK: Py<PyBytes>, message: Py<PyBytes>, signature: Py<PyBytes>) -> bool {
    let msg_obj = message.to_object(_py);
    let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let pubkey_obj = PK.to_object(_py);
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
    return sig.verify(msg_bytes, &pk);
}

#[pyfunction]
fn Aggregate(_py: Python, signatures: &PyList) -> PyObject {
    let mut agg_sig = AggregateSignature::new();
    signatures
        .iter()
        .for_each(|sig| {
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
    let agg_pub = AggregatePublicKey::from_public_keys(&pks_ref);
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
        Ok(agg_sig) => agg_sig,
        Err(_) => return false,
    };
    let mut pks: Vec<PublicKey> = vec![];
    PKs.iter().for_each(|pk| {
        let pubkey_obj = pk.to_object(_py);
        let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
        pks.push(PublicKey::from_bytes(pubkey_bytes).unwrap());
    });

    let pks_ref: Vec<&PublicKey> = pks.iter().map(std::borrow::Borrow::borrow).collect();

    let agg_pk = AggregatePublicKey::from_public_keys(&pks_ref);
    return agg_sig.verify(&msg_bytes, &agg_pk);
}

#[pyfunction]
fn AggregateVerify(_py: Python, pairs: &PyList, signature: Py<PyBytes>) -> bool {
    let sig_obj = signature.to_object(_py);
    let sig_bytes = sig_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
    let agg_sig = AggregateSignature::from_bytes(sig_bytes).unwrap();

    let mut apks: Vec<AggregatePublicKey> = vec![];
    let mut msgs: Vec<Vec<u8>> = vec![];
    pairs.iter().for_each(|pair| {
        let pubkey_obj = pair.get_item(0).unwrap().to_object(_py);
        let pubkey_bytes = pubkey_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes();
        let apk = AggregatePublicKey::from_bytes(pubkey_bytes).unwrap();

        let msg_obj = pair.get_item(1).unwrap().to_object(_py);
        let msg_bytes = msg_obj.cast_as::<PyBytes>(_py).unwrap().as_bytes().to_vec();

        msgs.push(msg_bytes);
        apks.push(apk);
    });

    let apks_ref: Vec<&AggregatePublicKey> = apks.iter().map(std::borrow::Borrow::borrow).collect();

    return agg_sig.verify_multiple(&msgs, &apks_ref);
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
