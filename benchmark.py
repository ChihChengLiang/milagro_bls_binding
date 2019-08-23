import pytest
import milagro_bls_binding as bls
import os
import time

VALIDATORS = 128


@pytest.fixture
def privkeys():
    return [(2 ** i).to_bytes(48, "little") for i in range(VALIDATORS)]


@pytest.fixture
def pubkeys(privkeys):
    return [bls.privtopub(key) for key in privkeys]


@pytest.fixture
def domain():
    return 0


@pytest.fixture
def messages():
    return [b"\x00" * 32, b"\x01" * 32]


@pytest.fixture
def signautes(domain, messages, privkeys):
    if os.path.isfile(".key_cache"):
        with open(".key_cache", "r") as f:
            sigs = [bytes.fromhex(line) for line in f.readlines()]
    else:
        sigs = [
            bls.sign(messages[i % 2], key, domain) for i, key in enumerate(privkeys)
        ]
        with open(".key_cache", "w") as f:
            f.writelines([sig.hex() + "\n" for sig in sigs])
    return sigs


@pytest.fixture
def agg_sigs(signautes):
    return bls.aggregate_signatures(signautes)


def verify_aggsig(agg_sigs, pubkeys, domain, messages):
    len_msg = len(messages)
    agg_pub1 = bls.aggregate_pubkeys(
        [key for i, key in enumerate(pubkeys) if i % len_msg == 0]
    )
    app_pub2 = bls.aggregate_pubkeys(
        [key for i, key in enumerate(pubkeys) if i % len_msg == 1]
    )
    return bls.verify_multiple([agg_pub1, app_pub2], messages, agg_sigs, domain)


def test_aggregation(benchmark, agg_sigs, pubkeys, domain, messages):
    args = (agg_sigs, pubkeys, domain, messages)
    result = benchmark.pedantic(verify_aggsig, args=args, rounds=100, iterations=10)
    assert result == True


def verify_single_sig(sig, pubkeys, domain, messages):
    return bls.verify(
        message_hashes=messages[0], pubkey=pubkeys[0], signature=sig, domain=domain
    )


def test_single_verify(benchmark, agg_sigs, pubkeys, privkeys, domain, messages):
    sig = bls.sign(messages[0], privkeys[0], domain)
    args = (sig, pubkeys, domain, messages)

    result = benchmark.pedantic(verify_single_sig, args=args, rounds=100, iterations=10)
    assert result == True
