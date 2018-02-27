# crypto-bench

```
xxHash wasm x 22,199 ops/sec ±2.57% (81 runs sampled)
xxHash nan x 39,829 ops/sec ±0.93% (78 runs sampled)
node crypto sha1 x 15,691 ops/sec ±0.24% (92 runs sampled)
node crypto sha256 x 9,176 ops/sec ±0.25% (94 runs sampled)
forge sha256 x 1,875 ops/sec ±0.40% (93 runs sampled)
blake2 x 11,700 ops/sec ±2.74% (79 runs sampled)
chloride sign x 6,745 ops/sec ±0.39% (89 runs sampled)
chloride verify x 5,096 ops/sec ±0.22% (93 runs sampled)
forge RSA 2048 sign x 25.33 ops/sec ±0.62% (45 runs sampled)
forge RSA 2048 verify x 1,019 ops/sec ±0.22% (92 runs sampled)
node crypto 2048 sign x 532 ops/sec ±0.22% (90 runs sampled)
node crypto 2048 verify x 5,525 ops/sec ±0.41% (90 runs sampled)
tweetnacl sign x 252 ops/sec ±2.02% (77 runs sampled)
tweetnacl verify x 139 ops/sec ±1.18% (68 runs sampled)
native ed25519 sign x 5,551 ops/sec ±0.29% (89 runs sampled)
native ed25519 verify x 3,716 ops/sec ±0.22% (92 runs sampled)
```
