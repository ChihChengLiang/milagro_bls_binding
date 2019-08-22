import milagro_bls_binding as bls


import pytest

CURVE_ORDER = (
    52435875175126190479447740508185965837690552500527637822603658699938581184513
)
EMPTY_SIGNATURE = b"\x00" * 96
EMPTY_PUBKEY = b"\x00" * 48


def assert_pubkey(obj):
    assert isinstance(obj, bytes) and len(obj) == 48


def assert_signature(obj):
    assert isinstance(obj, bytes) and len(obj) == 96


def test_sanity():
    msg_0 = b"\x32" * 32
    domain = 123

    # Test: Verify the basic sign/verify process
    privkey_0 = (5566).to_bytes(48, "little")
    sig_0 = bls.sign(msg_0, privkey_0, domain)
    assert_signature(sig_0)
    pubkey_0 = bls.privtopub(privkey_0)
    assert_pubkey(pubkey_0)
    assert bls.verify(msg_0, pubkey_0, sig_0, domain)

    privkey_1 = (5567).to_bytes(48, "little")
    sig_1 = bls.sign(msg_0, privkey_1, domain)
    pubkey_1 = bls.privtopub(privkey_1)
    assert bls.verify(msg_0, pubkey_1, sig_1, domain)

    # Test: Verify signatures are correctly aggregated
    aggregated_signature = bls.aggregate_signatures([sig_0, sig_1])
    assert_signature(aggregated_signature)

    # Test: Verify pubkeys are correctly aggregated
    aggregated_pubkey = bls.aggregate_pubkeys([pubkey_0, pubkey_1])
    assert_pubkey(aggregated_pubkey)

    # Test: Verify with `aggregated_signature` and `aggregated_pubkey`
    assert bls.verify(msg_0, aggregated_pubkey, aggregated_signature, domain)

    # Test: `verify_multiple`
    msg_1 = b"\x22" * 32
    privkey_2 = (55688).to_bytes(48, "little")
    sig_2 = bls.sign(msg_1, privkey_2, domain)
    assert_signature(sig_2)
    pubkey_2 = bls.privtopub(privkey_2)
    assert_pubkey(pubkey_2)
    sig_1_2 = bls.aggregate_signatures([sig_1, sig_2])
    assert bls.verify_multiple(
        pubkeys=[pubkey_1, pubkey_2],
        message_hashes=[msg_0, msg_1],
        signature=sig_1_2,
        domain=domain,
    )


def test_invalid_signature():
    msg_0 = b"\x32" * 32
    privkey = (5567).to_bytes(48, "little")
    pubkey = bls.privtopub(privkey)
    invalid_sig = b"\x12" * 96
    assert not bls.verify(msg_0, pubkey, invalid_sig, domain=123)


@pytest.mark.parametrize(
    "privkey_int",
    [
        (1),
        (5),
        (124),
        (735),
        (127409812145),
        (90768492698215092512159),
        (CURVE_ORDER - 1),
    ],
)
def test_bls_core_succeed(privkey_int):
    domain = 0
    privkey = privkey_int.to_bytes(48, "little")
    msg = str(privkey).encode("utf-8")
    sig = bls.sign(msg, privkey, domain=domain)
    pub = bls.privtopub(privkey)
    assert_pubkey(pub)
    assert bls.verify(msg, pub, sig, domain=domain)


@pytest.mark.parametrize(
    "msg, privkeys_int",
    [
        (
            b"\x12" * 32,
            [1, 5, 124, 735, 127409812145, 90768492698215092512159, CURVE_ORDER - 1],
        ),
        (b"\x34" * 32, [42, 666, 1274099945, 4389392949595]),
    ],
)
def test_signature_aggregation(msg, privkeys_int):
    domain = 0
    privkeys = [k.to_bytes(48, "little") for k in privkeys_int]
    sigs = [bls.sign(msg, k, domain=domain) for k in privkeys]
    pubs = [bls.privtopub(k) for k in privkeys]
    aggsig = bls.aggregate_signatures(sigs)
    aggpub = bls.aggregate_pubkeys(pubs)
    assert bls.verify(msg, aggpub, aggsig, domain=domain)


@pytest.mark.parametrize("msg_1, msg_2", [(b"\x12" * 32, b"\x34" * 32)])
@pytest.mark.parametrize(
    "privkeys_1_int, privkeys_2_int",
    [
        (tuple(range(1, 11)), tuple(range(1, 11))),
        ((1, 2, 3), (4, 5, 6, 7)),
        ((1, 2, 3), (2, 3, 4, 5)),
        ((1, 2, 3), ()),
        ((), (2, 3, 4, 5)),
    ],
)
def test_multi_aggregation(msg_1, msg_2, privkeys_1_int, privkeys_2_int):
    domain = 0

    privkeys_1 = [k.to_bytes(48, "little") for k in privkeys_1_int]
    privkeys_2 = [k.to_bytes(48, "little") for k in privkeys_2_int]

    sigs_1 = [
        bls.sign(msg_1, k, domain=domain) for k in privkeys_1
    ]  # signatures to msg_1
    pubs_1 = [bls.privtopub(k) for k in privkeys_1]
    aggpub_1 = bls.aggregate_pubkeys(pubs_1)  # sig_1 to msg_1

    sigs_2 = [
        bls.sign(msg_2, k, domain=domain) for k in privkeys_2
    ]  # signatures to msg_2
    pubs_2 = [bls.privtopub(k) for k in privkeys_2]
    aggpub_2 = bls.aggregate_pubkeys(pubs_2)  # sig_2 to msg_2

    message_hashes = [msg_1, msg_2]
    pubs = [aggpub_1, aggpub_2]
    aggsig = bls.aggregate_signatures(sigs_1 + sigs_2)

    assert bls.verify_multiple(
        pubkeys=pubs, message_hashes=message_hashes, signature=aggsig, domain=domain
    )
