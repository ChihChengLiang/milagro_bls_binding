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


def verifying_one_message(agg_sig, pubkeys, domain, message):
    agg_pub = bls.aggregate_pubkeys(pubkeys)
    return bls.verify(message, agg_pub, agg_sig, domain)


def test_verifying_aggregate_of_128_signatures(
    benchmark, privkeys, pubkeys, messages, domain
):
    message = messages[0]
    sigs = [bls.sign(message, key, domain) for key in privkeys]
    agg_sig = bls.aggregate_signatures(sigs)

    args = (agg_sig, pubkeys, domain, message)
    result = benchmark.pedantic(
        verifying_one_message, args=args, rounds=10, iterations=10
    )
    assert result == True


def verifying_two_distinct_messages(agg_sig, pubkeys, domain, messages):
    len_msg = len(messages)
    agg_pub1 = bls.aggregate_pubkeys(
        [key for i, key in enumerate(pubkeys) if i % len_msg == 0]
    )
    app_pub2 = bls.aggregate_pubkeys(
        [key for i, key in enumerate(pubkeys) if i % len_msg == 1]
    )
    return bls.verify_multiple([agg_pub1, app_pub2], messages, agg_sig, domain)


def test_verifying_aggregation_of_128_signatures_with_two_distinct_messages(
    benchmark, privkeys, pubkeys, domain, messages
):
    sigs = [bls.sign(messages[i % 2], key, domain) for i, key in enumerate(privkeys)]
    agg_sig = bls.aggregate_signatures(sigs)
    args = (agg_sig, pubkeys, domain, messages)
    result = benchmark.pedantic(
        verifying_two_distinct_messages, args=args, rounds=10, iterations=10
    )
    assert result == True


def verify_single_sig(sig, pubkeys, domain, messages):
    return bls.verify(
        message_hashes=messages[0], pubkey=pubkeys[0], signature=sig, domain=domain
    )


def test_single_verify(benchmark, pubkeys, privkeys, domain, messages):
    sig = bls.sign(messages[0], privkeys[0], domain)
    args = (sig, pubkeys, domain, messages)

    result = benchmark.pedantic(verify_single_sig, args=args, rounds=100, iterations=10)
    assert result == True
