build:
	maturin develop

install:
	pip install .

test:
	pytest test.py
