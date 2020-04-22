import milagro_bls_binding as bls


import pytest

from py_ecc.optimized_bls12_381 import (
    G1,
    G2,
    multiply,
)
from py_ecc.bls.g2_primatives import (
    G1_to_pubkey,
    G2_to_signature,
)


def to_bytes(i):
    return i.to_bytes(48, "big")


def bytes_range(l):
    return [to_bytes(i) for i in l]


@pytest.mark.parametrize(
    'SKs,messages,success',
    [
        (bytes_range(range(1, 10)), range(1, 10), True),
        (bytes_range([1,2,3]), [1,2,3], True),
        # Test duplicate messages fail
        (bytes_range([1,2,3]), [42, 69, 42], False),
    ]
)
def test_aggregate_verify(SKs, messages, success):
    PKs = [bls.PrivToPub(SK) for SK in SKs]
    messages = [msg.to_bytes(32, "big") for msg in messages]
    signatures = [bls.Sign(SK, msg) for SK, msg in zip(SKs, messages)]
    aggregate_signature = bls.Aggregate(signatures)
    assert bls.AggregateVerify(
        list(zip(PKs, messages)), aggregate_signature) == success


@pytest.mark.parametrize(
    'privkey_int',
    [
        (1),
        (5),
        (124),
        (735),
        (127409812145),
        (90768492698215092512159),
        # (0),
    ]
)
def test_sign_verify(privkey_int):
    privkey = to_bytes(privkey_int)
    msg = str(privkey).encode('utf-8')
    pub = bls.PrivToPub(privkey)
    sig = bls.Sign(privkey, msg)
    assert bls.Verify(pub, msg, sig)


@pytest.mark.parametrize(
    'signature_points,result_point',
    [
        ([multiply(G1, 2), multiply(G1, 3)], multiply(G1, 2 + 3)),
        ([multiply(G1, 42), multiply(G1, 69)], multiply(G1, 42 + 69)),
    ]
)
def test_aggregate_pks(signature_points, result_point):
    signatures = [G1_to_pubkey(pt) for pt in signature_points]
    result_signature = G1_to_pubkey(result_point)
    assert bls._AggregatePKs(signatures) == result_signature


@pytest.mark.parametrize(
    'SKs,message',
    [
        (bytes_range(range(1, 5)), b'11'*48),
    ]
)
def test_fast_aggregate_verify(SKs, message):
    PKs = [bls.PrivToPub(sk) for sk in SKs]
    signatures = [bls.Sign(sk, message) for sk in SKs]
    aggregate_signature = bls.Aggregate(signatures)
    assert bls.FastAggregateVerify(
        PKs, message, aggregate_signature)
