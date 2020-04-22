# BLS12-381 Milagro Rust Binding for Python

![Python package](https://github.com/ChihChengLiang/milagro_bls_binding/workflows/Python%20package/badge.svg)
[![PyPI version](https://badge.fury.io/py/milagro-bls-binding.svg)](https://badge.fury.io/py/milagro-bls-binding)

This Python package is a performance-focused alternative to [ethereum/py_ecc](https://github.com/ethereum/py_ecc/). It binds [sigp/milagro_bls](https://github.com/sigp/milagro_bls)(Apache 2.0) rust library.

This library is unaudited. Please don't use it in production.

## Get Started

```sh
pip install milagro-bls-binding
```

See `test.py` for example usage.

## Test

```sh
pytest test.py
```
