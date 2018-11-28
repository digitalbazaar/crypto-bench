# crypto-bench

### Node.js 11.3.0 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz
```
xxHash wasm x 23,666 ops/sec ±1.67% (82 runs sampled)
xxHash nan x 46,113 ops/sec ±1.20% (83 runs sampled)
node crypto sha1 x 14,921 ops/sec ±1.38% (89 runs sampled)
node crypto sha256 x 9,366 ops/sec ±0.31% (92 runs sampled)
node 10.x+ crypto blake2b512 x 14,549 ops/sec ±0.43% (88 runs sampled)
forge sha256 x 1,865 ops/sec ±0.54% (92 runs sampled)
chloride sha256 x 6,126 ops/sec ±2.61% (86 runs sampled)
chloride blake2 aka generichash x 16,811 ops/sec ±1.72% (86 runs sampled)
sodium blake2 aka generichash x 16,408 ops/sec ±1.59% (87 runs sampled)
sodium-native blake2 aka generichash x 16,851 ops/sec ±1.61% (87 runs sampled)
native chloride ed25519 sign x 4,775 ops/sec ±0.54% (90 runs sampled)
native sodium ed25519 sign x 4,757 ops/sec ±0.84% (92 runs sampled)
native sodium-native ed25519 sign x 4,787 ops/sec ±0.33% (91 runs sampled)
native chloride ed25519 verify x 5,587 ops/sec ±0.80% (92 runs sampled)
native sodium ed25519 verify x 5,581 ops/sec ±0.59% (91 runs sampled)
native sodium-native ed25519 verify x 5,580 ops/sec ±0.74% (89 runs sampled)
forge RSA 2048 sign x 26.65 ops/sec ±0.70% (48 runs sampled)
forge RSA 2048 verify x 554 ops/sec ±0.51% (90 runs sampled)
node crypto 2048 sign x 532 ops/sec ±0.34% (90 runs sampled)
node crypto 2048 verify x 5,849 ops/sec ±1.16% (89 runs sampled)
tweetnacl ed25519 sign x 201 ops/sec ±3.11% (78 runs sampled)
tweetnacl ed25519 verify x 131 ops/sec ±2.01% (73 runs sampled)
native ed25519 sign x 5,536 ops/sec ±1.00% (90 runs sampled)
native ed25519 verify x 4,662 ops/sec ±0.68% (93 runs sampled)
```

### Node.js 10.14.0 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz
```
xxHash wasm x 24,293 ops/sec ±1.41% (86 runs sampled)
xxHash nan x 48,561 ops/sec ±0.71% (88 runs sampled)
node crypto sha1 x 15,964 ops/sec ±0.39% (91 runs sampled)
node crypto sha256 x 9,364 ops/sec ±0.43% (94 runs sampled)
node 10.x+ crypto blake2b512 x 14,857 ops/sec ±0.75% (88 runs sampled)
forge sha256 x 1,981 ops/sec ±0.46% (93 runs sampled)
chloride sha256 x 6,463 ops/sec ±2.49% (88 runs sampled)
chloride blake2 aka generichash x 17,066 ops/sec ±1.38% (90 runs sampled)
sodium blake2 aka generichash x 16,730 ops/sec ±1.34% (88 runs sampled)
sodium-native blake2 aka generichash x 17,010 ops/sec ±1.46% (86 runs sampled)
native chloride ed25519 sign x 4,785 ops/sec ±0.67% (92 runs sampled)
native sodium ed25519 sign x 4,780 ops/sec ±0.62% (92 runs sampled)
native sodium-native ed25519 sign x 4,795 ops/sec ±0.66% (92 runs sampled)
native chloride ed25519 verify x 5,573 ops/sec ±0.69% (90 runs sampled)
native sodium ed25519 verify x 5,617 ops/sec ±0.76% (92 runs sampled)
native sodium-native ed25519 verify x 5,578 ops/sec ±0.70% (92 runs sampled)
forge RSA 2048 sign x 26.49 ops/sec ±0.51% (47 runs sampled)
forge RSA 2048 verify x 569 ops/sec ±0.63% (89 runs sampled)
node crypto 2048 sign x 534 ops/sec ±0.39% (89 runs sampled)
node crypto 2048 verify x 5,899 ops/sec ±1.04% (86 runs sampled)
tweetnacl ed25519 sign x 185 ops/sec ±2.86% (72 runs sampled)
tweetnacl ed25519 verify x 114 ops/sec ±2.62% (72 runs sampled)
native ed25519 sign x 5,583 ops/sec ±0.81% (90 runs sampled)
native ed25519 verify x 4,701 ops/sec ±0.51% (92 runs sampled)
```
### Node.js 8.14.0 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz
```
xxHash wasm x 22,885 ops/sec ±2.66% (83 runs sampled)
xxHash nan x 41,330 ops/sec ±0.56% (77 runs sampled)
node crypto sha1 x 16,218 ops/sec ±0.39% (94 runs sampled)
node crypto sha256 x 9,505 ops/sec ±0.40% (90 runs sampled)
node 10.x+ crypto blake2b512: N/A
forge sha256 x 1,838 ops/sec ±0.35% (93 runs sampled)
chloride sha256 x 6,736 ops/sec ±1.97% (88 runs sampled)
chloride blake2 aka generichash x 15,704 ops/sec ±3.22% (84 runs sampled)
sodium blake2 aka generichash x 15,457 ops/sec ±2.93% (84 runs sampled)
sodium-native blake2 aka generichash x 15,838 ops/sec ±2.97% (82 runs sampled)
native chloride ed25519 sign x 4,711 ops/sec ±1.59% (91 runs sampled)
native sodium ed25519 sign x 4,713 ops/sec ±1.64% (91 runs sampled)
native sodium-native ed25519 sign x 4,738 ops/sec ±1.59% (91 runs sampled)
native chloride ed25519 verify x 5,491 ops/sec ±1.67% (88 runs sampled)
native sodium ed25519 verify x 5,476 ops/sec ±1.69% (91 runs sampled)
native sodium-native ed25519 verify x 5,480 ops/sec ±1.65% (91 runs sampled)
forge RSA 2048 sign x 25.98 ops/sec ±0.97% (47 runs sampled)
forge RSA 2048 verify x 528 ops/sec ±0.70% (90 runs sampled)
node crypto 2048 sign x 525 ops/sec ±0.24% (92 runs sampled)
node crypto 2048 verify x 5,727 ops/sec ±0.42% (90 runs sampled)
tweetnacl ed25519 sign x 186 ops/sec ±1.77% (77 runs sampled)
tweetnacl ed25519 verify x 119 ops/sec ±2.02% (74 runs sampled)
native ed25519 sign x 5,459 ops/sec ±1.94% (89 runs sampled)
native ed25519 verify x 4,580 ops/sec ±1.50% (92 runs sampled)
```
