# BLS12-381 Milagro Rust Binding for Python

![Python package](https://github.com/ChihChengLiang/milagro_bls_binding/workflows/Python%20package/badge.svg)
[![PyPI version](https://badge.fury.io/py/milagro-bls-binding.svg)](https://badge.fury.io/py/milagro-bls-binding)

This Python package is a performance-focused alternative to [ethereum/py_ecc](https://github.com/ethereum/py_ecc/). It binds [sigp/milagro_bls](https://github.com/sigp/milagro_bls)(Apache 2.0) rust library.

This library is unaudited. Please don't use it in production.

For other technical details, see [FAQ](./FAQ.md)

## Get Started

```sh
pip install milagro-bls-binding
```

See `test.py` for example usage.

## Build

The releasing is unstable at this moment. In case a desired version for your platfrom can't be found via `pip install milagro_bls_binding`, try build it from the source.

It requires `nightly` version of rust.

```sh
pip install .
```

## Test

```sh
pytest test.py
```
