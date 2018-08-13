# crypto-bench

### Node.js 10.8.0 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz
```
xxHash wasm x 20,905 ops/sec ±1.40% (85 runs sampled)
xxHash nan x 47,256 ops/sec ±0.51% (86 runs sampled)
node crypto sha1 x 15,099 ops/sec ±0.50% (87 runs sampled)
node crypto sha256 x 8,868 ops/sec ±0.68% (93 runs sampled)
node 10.x crypto blake2b512 x 14,436 ops/sec ±0.53% (89 runs sampled)
forge sha256 x 2,047 ops/sec ±1.09% (91 runs sampled)
chloride sha256 x 6,157 ops/sec ±2.38% (87 runs sampled)
chloride blake2 aka generichash x 16,775 ops/sec ±1.28% (90 runs sampled)
native chloride ed25519 sign x 4,737 ops/sec ±0.39% (91 runs sampled)
native chloride ed25519 verify x 5,498 ops/sec ±0.72% (90 runs sampled)
forge RSA 2048 sign x 25.75 ops/sec ±1.84% (46 runs sampled)
forge RSA 2048 verify x 565 ops/sec ±1.37% (89 runs sampled)
node crypto 2048 sign x 523 ops/sec ±0.25% (91 runs sampled)
node crypto 2048 verify x 5,803 ops/sec ±0.89% (87 runs sampled)
tweetnacl ed25519 sign x 199 ops/sec ±2.35% (76 runs sampled)
tweetnacl ed25519 verify x 124 ops/sec ±2.10% (70 runs sampled)
native ed25519 sign x 5,312 ops/sec ±1.10% (89 runs sampled)
native ed25519 verify x 4,587 ops/sec ±0.61% (93 runs sampled)
```
### Node.js 8.11.3 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz
```
xxHash wasm x 22,281 ops/sec ±2.46% (83 runs sampled)
xxHash nan x 39,899 ops/sec ±1.04% (78 runs sampled)
node crypto sha1 x 15,707 ops/sec ±0.32% (89 runs sampled)
node crypto sha256 x 8,973 ops/sec ±1.14% (90 runs sampled)
forge sha256 x 1,867 ops/sec ±0.31% (91 runs sampled)
chloride sha256 x 6,310 ops/sec ±1.90% (86 runs sampled)
chloride blake2 aka generichash x 15,527 ops/sec ±2.70% (85 runs sampled)
native chloride ed25519 sign x 4,597 ops/sec ±1.45% (90 runs sampled)
native chloride ed25519 verify x 5,255 ops/sec ±1.89% (87 runs sampled)
forge RSA 2048 sign x 24.51 ops/sec ±1.81% (44 runs sampled)
forge RSA 2048 verify x 505 ops/sec ±0.64% (88 runs sampled)
node crypto 2048 sign x 512 ops/sec ±0.16% (91 runs sampled)
node crypto 2048 verify x 5,636 ops/sec ±0.32% (92 runs sampled)
tweetnacl ed25519 sign x 185 ops/sec ±1.85% (76 runs sampled)
tweetnacl ed25519 verify x 118 ops/sec ±1.97% (74 runs sampled)
native ed25519 sign x 5,282 ops/sec ±1.89% (89 runs sampled)
native ed25519 verify x 4,442 ops/sec ±1.45% (90 runs sampled)
```
