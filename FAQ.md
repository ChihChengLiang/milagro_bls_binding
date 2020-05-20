# FAQ

## Why and when we are allowed to aggregate duplicated messages in AggregateVerify?

@kirk-baird:

> Couple of things worth updating
>
> 1. secret keys are now in the range 0 <= sk <= r - 1 according to https://tools.ietf.org/html/draft-irtf-cfrg-bls-signature-02#section-2.4
> 2. Messages only need to be distinct if we do not verify ownership of public keys as a protection against the rogue key attack.

@ChihChengLiang:

> thank you for the heads up. how would rouge key attack happen in 2) ?
> oh, I should rephrase the question. can we avoid rouge key attack without checking the ownership by just making message distinct?

@kirk-baird:

> If you haven't verified the public keys then you can only aggregate one per message:
> e.g.
> Let

```
S1 = H(msg1) * sk1
S2 = H(msg2) * sk2
AggSig1 = S1 + S2
```

> Then we can make

```
S3 = -S1 = -H(msg1) * sk1 = H(msg1) * (-sk1)
```

> Note we will also now have `pk3 = -pk1`
> Thus we can make an aggregate signature

```
AggSig2 = S1 + S2 + S3
```

> Now when verifying using the aggregate signature we have input

```
(AggSig2, (pk1, pk2, pk3), (msg1, msg2, msg1))
```

> So when we do the pairing

```
e(pk1, msg1) * e(pk2, msg2) * e(pk3, msg1) = e(pk1, msg1) * e(pk2, msg2) * e(-pk1, msg1)
```

> Now we have the issue that the pairing `e(a, b) * e(-a, b) = 1`
> Thus

```
e(pk1, msg1) * e(pk2, msg2) * e(-pk1, msg1) = e(sk2, msg)
```

> So by using allowing non-distinct messages we can nullify other users signatures.

> This will only work if you have `e(a, b) * e(-a, b) = 1 OR e(a, b) * e(a, -b) = 1`
> So to answer you second question if we have different messages (i.e. changing b)
> Consider `e(pk1, msg1) * e(-pk, msg2) != 1` and thus our pairing still works

@ChihChengLiang:

> thanks that explains clearly!

@kirk-baird:

> No worries happy to help
