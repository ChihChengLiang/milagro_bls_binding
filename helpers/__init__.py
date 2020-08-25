from milagro_bls_binding import (
    pairing as _pairing,
)
from py_ecc.fields import optimized_bls12_381_FQ12 as FQ12
from py_ecc.bls.g2_primatives import (
    G1_to_pubkey,
    G2_to_signature,
)

def parse_fq12(fq12_str: str):
    coeffs = [int(hex_str, 16) for hex_str in fq12_str.replace(
        "[", "").replace("]", "").split(",")]
    return FQ12(coeffs)


def pairing(Q: "Optimized_Point3D[FQ2]",
            P: "Optimized_Point3D[FQ]",
            final_exponentiate: bool = True) -> FQ12:
    q = G2_to_signature(Q)  # Need to do the rename but it works here
    p = G1_to_pubkey(P)
    fq12_str = _pairing(q, p, final_exponentiate)
    return parse_fq12(fq12_str)
