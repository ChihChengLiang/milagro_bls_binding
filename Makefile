build:
	maturin develop

install:
	pip install .

test:
	pytest test.py

publish: publish-mac publish-multilinux

publish-mac:
	maturin publish \
		--no-sdist \
		--username ${PYPI_USERNAME} \
		--password=${PYPI_PASSWORD} \
		-i /usr/local/var/pyenv/versions/3.6.0/bin/python\
		-i /usr/local/var/pyenv/versions/3.7.0/bin/python \
		-i /usr/local/var/pyenv/versions/3.8.0/bin/python

publish-multilinux:
	docker build -f manylinux1.dockerfile -t bls_manylinux1:latest .
	docker run -it --rm \
		-e MANYLINUX_VERSION=1 \
		-e PYPI_USERNAME=${PYPI_USERNAME} \
		-e PYPI_PASSWORD=${PYPI_PASSWORD} \
		-v ${PWD}:/tmp/src \
		bls_manylinux1:latest
