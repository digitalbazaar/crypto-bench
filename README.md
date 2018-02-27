# crypto-bench

```
xxHash wasm x 21,806 ops/sec ±2.60% (80 runs sampled)
xxHash nan x 40,075 ops/sec ±0.79% (75 runs sampled)
node crypto sha1 x 15,612 ops/sec ±0.24% (91 runs sampled)
node crypto sha256 x 9,117 ops/sec ±0.20% (90 runs sampled)
forge sha256 x 1,872 ops/sec ±0.43% (92 runs sampled)
blake2 x 11,716 ops/sec ±2.79% (82 runs sampled)
chloride sign x 5,084 ops/sec ±0.20% (93 runs sampled)
chloride verify x 6,032 ops/sec ±0.17% (92 runs sampled)
forge RSA 2048 sign x 25.28 ops/sec ±1.91% (45 runs sampled)
forge RSA 2048 verify x 1,015 ops/sec ±0.32% (92 runs sampled)
tweetnacl sign x 202 ops/sec ±2.00% (77 runs sampled)
tweetnacl verify x 130 ops/sec ±0.19% (74 runs sampled)
native ed25519 sign x 5,440 ops/sec ±0.28% (93 runs sampled)
native ed25519 verify x 4,598 ops/sec ±0.19% (93 runs sampled)
```
