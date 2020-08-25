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
from py_ecc.optimized_bls12_381 import pairing as py_ecc_pairing


def to_bytes(i):
    # Secret key must be 32 bytes
    return i.to_bytes(32, "big")


def bytes_range(l):
    return [to_bytes(i) for i in l]


@pytest.mark.xfail(reason="Haven't figure out how Fq12 could match yet")
def test_pairing():
    a = multiply(G2, 123)
    b = multiply(G1, 456)
    assert bls.pairing(a, b, False) == py_ecc_pairing(a, b, False)
    assert bls.pairing(a, b) == py_ecc_pairing(a, b)


@pytest.mark.parametrize(
    'SKs,messages,success',
    [
        (bytes_range(range(1, 10)), range(1, 10), True),
        (bytes_range([1, 2, 3]), [1, 2, 3], True),
        # duplicate messages also work
        (bytes_range([1, 2, 3]), [42, 69, 42], True),
    ]
)
def test_aggregate_verify(SKs, messages, success):
    PKs = [bls.SkToPk(SK) for SK in SKs]
    messages = [msg.to_bytes(32, "big") for msg in messages]
    signatures = [bls.Sign(SK, msg) for SK, msg in zip(SKs, messages)]
    aggregate_signature = bls.Aggregate(signatures)
    assert bls.AggregateVerify(PKs, messages, aggregate_signature) == success


@pytest.mark.parametrize(
    'privkey_int',
    [
        (1),
        (5),
        (124),
        (735),
        (127409812145),
        (90768492698215092512159),
        # secret key is allowed to be 0 now
        # https://tools.ietf.org/html/draft-irtf-cfrg-bls-signature-02#section-2.4
        (0),
    ]
)
def test_sign_verify(privkey_int):
    privkey = to_bytes(privkey_int)
    msg = str(privkey).encode('utf-8')
    pub = bls.SkToPk(privkey)
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
    PKs = [bls.SkToPk(sk) for sk in SKs]
    signatures = [bls.Sign(sk, message) for sk in SKs]
    aggregate_signature = bls.Aggregate(signatures)
    assert bls.FastAggregateVerify(PKs, message, aggregate_signature)


def test_weird_cases():
    bad_signature = b'\x00' * 96
    assert not bls.AggregateVerify([], [], bad_signature)
    assert bls.Aggregate([]) == b'\xc0' + b'\x00' * 95
