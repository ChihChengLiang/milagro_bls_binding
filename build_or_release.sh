#!/bin/sh
/opt/python/cp37-cp37m/bin/maturin publish \
    --username $PYPI_USERNAME \
    --password $PYPI_PASSWORD \
    --manylinux $MANYLINUX_VERSION \
    -i /opt/python/cp36-cp36m/bin/python \
    -i /opt/python/cp37-cp37m/bin/python \
    -i /opt/python/cp38-cp38/bin/python
