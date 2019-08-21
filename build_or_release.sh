#!/bin/sh
# /opt/python/cp37-cp37m/bin/pyo3-pack build --manylinux $MANYLINUX_VERSION --release -i /opt/python/cp37-cp37m/bin/python -i /opt/python/cp36-cp36m/bin/python
# ls -1 target/wheels/*.whl | xargs -I%  auditwheel show %
 /opt/python/cp37-cp37m/bin/pyo3-pack publish --username $PYPI_USERNAME --manylinux $MANYLINUX_VERSION -i /opt/python/cp37-cp37m/bin/python -i /opt/python/cp36-cp36m/bin/python
