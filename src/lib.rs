use pyo3::prelude::*;
use pyo3::types::PyBytes;
use pyo3::wrap_pyfunction;

use milagro_bls::PublicKey;
use milagro_bls::SecretKey;

#[pyfunction]
fn priv_to_public(_py: Python, a: Py<PyBytes>) -> PyObject {
    let bytes = a.to_object(_py);
    let bytes = bytes.cast_as::<PyBytes>(_py).unwrap();
    let bytes = bytes.as_bytes();
    let sk = SecretKey::from_bytes(bytes).unwrap();
    let pk = PublicKey::from_secret_key(&sk);
    let obj = PyBytes::new(_py, pk.as_bytes().as_ref());
    return obj.to_object(_py);
}

/// This module is a python module implemented in Rust.
#[pymodule]
fn milagro_bls_binding(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_wrapped(wrap_pyfunction!(priv_to_public))?;

    Ok(())
}
