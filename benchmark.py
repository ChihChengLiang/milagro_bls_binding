import pytest
import milagro_bls_binding as bls
import os
import time

VALIDATORS = 128


@pytest.fixture
def privkeys():
    return [(i + 1).to_bytes(48, 'big') for i in range(VALIDATORS)]


@pytest.fixture
def pubkeys(privkeys):
    return [bls.PrivToPub(key) for key in privkeys]


@pytest.fixture
def messages():
    return [b"\x00" * 32, b"\x01" * 32]


def verifying_one_message(agg_sig, pubkeys, message):
    agg_pub = bls._AggregatePKs(pubkeys)
    return bls.Verify(agg_pub, message, agg_sig)


def test_verifying_aggregate_of_128_signatures(
    benchmark, privkeys, pubkeys, messages
):
    message = messages[0]
    sigs = [bls.Sign(key, message) for key in privkeys]
    agg_sig = bls.Aggregate(sigs)

    args = (agg_sig, pubkeys, message)
    result = benchmark.pedantic(
        verifying_one_message, args=args, rounds=10, iterations=10
    )
    assert result == True


def verifying_two_distinct_messages(agg_sig, pubkeys, messages):
    len_msg = len(messages)
    agg_pub1 = bls._AggregatePKs(
        [key for i, key in enumerate(pubkeys) if i % len_msg == 0]
    )
    app_pub2 = bls._AggregatePKs(
        [key for i, key in enumerate(pubkeys) if i % len_msg == 1]
    )
    return bls.AggregateVerify([[agg_pub1, messages[0]], [app_pub2, messages[1]]], agg_sig)


def test_verifying_aggregation_of_128_signatures_with_two_distinct_messages(
    benchmark, privkeys, pubkeys, messages
):
    sigs = [bls.Sign(key, messages[i % 2]) for i, key in enumerate(privkeys)]
    agg_sig = bls.Aggregate(sigs)
    args = (agg_sig, pubkeys, messages)
    result = benchmark.pedantic(
        verifying_two_distinct_messages, args=args, rounds=10, iterations=10
    )
    assert result == True


def verify_single_sig(sig, pubkeys, messages):
    return bls.Verify(pubkeys[0], messages[0], sig)


def test_single_verify(benchmark, pubkeys, privkeys, messages):
    sig = bls.Sign(privkeys[0], messages[0])
    args = (sig, pubkeys, messages)

    result = benchmark.pedantic(
        verify_single_sig, args=args, rounds=100, iterations=10)
    assert result == True
