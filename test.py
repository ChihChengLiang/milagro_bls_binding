from milagro_bls_binding import priv_to_public

pubkey = priv_to_public(b'\x56' * 48)

assert isinstance(pubkey, bytes)
assert len(pubkey) == 48

