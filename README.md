# crypto-bench

```
xxHash wasm x 22,750 ops/sec ±2.39% (83 runs sampled)
xxHash nan x 40,802 ops/sec ±0.28% (77 runs sampled)
node crypto sha1 x 15,829 ops/sec ±0.29% (91 runs sampled)
node crypto sha256 x 9,251 ops/sec ±0.18% (92 runs sampled)
forge sha256 x 1,890 ops/sec ±0.43% (92 runs sampled)
blake2 x 11,885 ops/sec ±2.65% (84 runs sampled)
native chloride ed25519 sign x 4,591 ops/sec ±1.74% (89 runs sampled)
native chloride ed25519 verify x 5,342 ops/sec ±1.70% (88 runs sampled)
forge RSA 2048 sign x 25.20 ops/sec ±1.99% (46 runs sampled)
forge RSA 2048 verify x 526 ops/sec ±0.60% (89 runs sampled)
node crypto 2048 sign x 539 ops/sec ±0.22% (91 runs sampled)
node crypto 2048 verify x 5,570 ops/sec ±0.48% (90 runs sampled)
tweetnacl ed25519 sign x 205 ops/sec ±1.56% (79 runs sampled)
tweetnacl ed25519 verify x 134 ops/sec ±1.00% (74 runs sampled)
native ed25519 sign x 4,939 ops/sec ±1.80% (89 runs sampled)
native ed25519 verify x 4,241 ops/sec ±1.34% (91 runs sampled)
```
