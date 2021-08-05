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
    # Secret key must be 32 bytes
    return i.to_bytes(32, "big")


def bytes_range(l):
    return [to_bytes(i) for i in l]


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

@pytest.mark.parametrize(
    'SKs,messages',
    [
        (bytes_range(range(1, 5)), bytes_range(range(55, 66))),
    ]
)
def test_verify_multiple_aggregate_signatures(SKs, messages):
    signature_set = [
        (
            bls.Aggregate( [bls.Sign(sk, msg) for sk in SKs]),
            bls._AggregatePKs([bls.SkToPk(sk) for sk in SKs]),
            msg
        )
        for msg in messages
    ]
    assert bls.VerifyMultipleAggregateSignatures(signature_set)
    bad_signature_set = [(aggsig, aggkey, msg + b'\xbadd') for aggsig, aggkey, msg in signature_set]
    assert not bls.VerifyMultipleAggregateSignatures(bad_signature_set)

def test_weird_cases():
    Z1_PUBKEY = b'\xc0' + b'\x00' * 47
    Z2_SIGNATURE = b'\xc0' + b'\x00' * 95
    assert not bls.AggregateVerify([], [], Z2_SIGNATURE)
    assert bls.Aggregate([]) == Z2_SIGNATURE
    with pytest.raises(ValueError):
        bls.Sign(to_bytes(0), b'abcd')
    assert not bls.Verify(Z1_PUBKEY, b'abcd', Z2_SIGNATURE)
    assert not bls.FastAggregateVerify([Z1_PUBKEY], b'abcd', Z2_SIGNATURE)
