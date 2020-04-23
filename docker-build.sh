docker build -f manylinux1.dockerfile -t bls_manylinux1:latest .
docker run -it --rm \
    -e MANYLINUX_VERSION="1"  \
    -e PYPI_USERNAME="$PYPI_USERNAME" \
    -e PYPI_PASSWORD="$PYPI_PASSWORD" \
    -v $PWD:/tmp/src \
    bls_manylinux1:latest
