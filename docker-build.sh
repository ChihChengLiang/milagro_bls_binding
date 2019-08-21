docker build -f manylinux1.dockerfile -t bls_manylinux1:latest .
docker run -e MANYLINUX_VERSION="1"  -e PYPI_USERNAME="$PYPI_USERNAME" -e PYO3_PACK_PASSWORD="$PYO3_PACK_PASSWORD" -v $PWD:/tmp/src bls_manylinux1:latest
