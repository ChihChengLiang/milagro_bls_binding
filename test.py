from milagro_bls_binding import privtopub


def test_privtopub():
    pubkey = privtopub(b'\x56' * 48)
    assert isinstance(pubkey, bytes)
    assert len(pubkey) == 48

