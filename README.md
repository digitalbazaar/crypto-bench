# crypto-bench

```
xxHash wasm x 22,188 ops/sec ±2.43% (83 runs sampled)
xxHash nan x 39,570 ops/sec ±0.80% (76 runs sampled)
node crypto sha1 x 15,170 ops/sec ±1.15% (89 runs sampled)
node crypto sha256 x 8,949 ops/sec ±0.24% (91 runs sampled)
forge sha256 x 1,817 ops/sec ±0.76% (91 runs sampled)
blake2 x 11,606 ops/sec ±2.71% (81 runs sampled)
chloride sign x 5,001 ops/sec ±0.27% (92 runs sampled)
chloride verify x 5,949 ops/sec ±0.17% (90 runs sampled)
forge RSA 2048 sign x 25.19 ops/sec ±0.86% (45 runs sampled)
forge RSA 2048 verify x 1,002 ops/sec ±0.33% (91 runs sampled)
node crypto 2048 sign x 522 ops/sec ±0.17% (90 runs sampled)
node crypto 2048 verify x 5,406 ops/sec ±0.29% (90 runs sampled)
tweetnacl sign x 197 ops/sec ±2.05% (75 runs sampled)
tweetnacl verify x 129 ops/sec ±0.98% (72 runs sampled)
native ed25519 sign x 5,370 ops/sec ±0.24% (92 runs sampled)
native ed25519 verify x 4,533 ops/sec ±0.13% (92 runs sampled)
```
