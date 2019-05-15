# crypto-bench

### Node.js 12.2.0 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz
As of 20190515 `sodium-native` will not build with Node 12.
see: https://github.com/sodium-friends/sodium-native/issues/95
```
node crypto Ed25519 sign x 4,235 ops/sec ±2.44% (77 runs sampled)
node crypto Ed25519 verify x 3,405 ops/sec ±1.97% (75 runs sampled)
```

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

### Node.js 10.15.0 Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz
```
xxHash wasm x 19,700 ops/sec ±0.95% (78 runs sampled)
xxHash nan x 46,261 ops/sec ±0.92% (86 runs sampled)
node crypto sha1 x 15,051 ops/sec ±0.72% (92 runs sampled)
node crypto sha256 x 8,953 ops/sec ±0.21% (89 runs sampled)
node 10.x+ crypto blake2b512 x 14,224 ops/sec ±0.92% (91 runs sampled)
forge sha256 x 2,015 ops/sec ±0.39% (90 runs sampled)
chloride sha256 x 6,039 ops/sec ±2.72% (84 runs sampled)
chloride blake2 aka generichash x 16,327 ops/sec ±1.20% (90 runs sampled)
sodium blake2 aka generichash x 15,808 ops/sec ±1.41% (86 runs sampled)
sodium-native blake2 aka generichash x 16,315 ops/sec ±1.25% (90 runs sampled)
native chloride ed25519 sign x 4,600 ops/sec ±0.71% (91 runs sampled)
native sodium ed25519 sign x 4,533 ops/sec ±0.61% (92 runs sampled)
native sodium-native ed25519 sign x 4,590 ops/sec ±0.79% (89 runs sampled)
native chloride ed25519 verify x 5,338 ops/sec ±0.85% (89 runs sampled)
native sodium ed25519 verify x 5,373 ops/sec ±0.65% (89 runs sampled)
native sodium-native ed25519 verify x 5,369 ops/sec ±0.79% (90 runs sampled)
forge RSA 2048 sign x 25.20 ops/sec ±0.74% (45 runs sampled)
forge RSA 2048 verify x 554 ops/sec ±0.60% (90 runs sampled)
node cryto RSA generateKeySync x 8.07 ops/sec ±21.50% (18 runs sampled)
node crypto 2048 sign x 512 ops/sec ±0.39% (88 runs sampled)
node crypto 2048 verify x 5,677 ops/sec ±1.05% (86 runs sampled)
tweetnacl ed25519 sign x 198 ops/sec ±2.57% (76 runs sampled)
tweetnacl ed25519 verify x 123 ops/sec ±2.40% (69 runs sampled)
native ed25519 sign x 5,278 ops/sec ±0.85% (91 runs sampled)
native ed25519 verify x 4,450 ops/sec ±0.45% (91 runs sampled)
```

### Node.js 10.14.0 AMD EPYC Processor @ 3GHz
#### This CPU features `sha_ni` extension.
```
xxHash wasm x 29,924 ops/sec ±1.62% (82 runs sampled)
xxHash nan x 49,297 ops/sec ±1.65% (79 runs sampled)
node crypto sha1 x 30,619 ops/sec ±0.80% (94 runs sampled)
node crypto sha256 x 29,751 ops/sec ±1.03% (93 runs sampled)
node 10.x+ crypto blake2b512 x 20,119 ops/sec ±0.65% (93 runs sampled)
forge sha256 x 2,281 ops/sec ±0.43% (94 runs sampled)
chloride sha256 x 8,171 ops/sec ±2.64% (86 runs sampled)
chloride blake2 aka generichash x 20,561 ops/sec ±1.80% (86 runs sampled)
sodium blake2 aka generichash x 20,292 ops/sec ±1.79% (87 runs sampled)
sodium-native blake2 aka generichash x 20,742 ops/sec ±1.74% (87 runs sampled)
native chloride ed25519 sign x 5,952 ops/sec ±1.17% (91 runs sampled)
native sodium ed25519 sign x 6,023 ops/sec ±1.06% (93 runs sampled)
native sodium-native ed25519 sign x 5,966 ops/sec ±1.07% (91 runs sampled)
native chloride ed25519 verify x 6,368 ops/sec ±0.95% (89 runs sampled)
native sodium ed25519 verify x 6,657 ops/sec ±1.16% (93 runs sampled)
native sodium-native ed25519 verify x 6,377 ops/sec ±0.93% (89 runs sampled)
forge RSA 2048 sign x 33.72 ops/sec ±2.51% (59 runs sampled)
forge RSA 2048 verify x 663 ops/sec ±0.59% (94 runs sampled)
node crypto 2048 sign x 717 ops/sec ±0.39% (93 runs sampled)
node crypto 2048 verify x 12,503 ops/sec ±1.84% (84 runs sampled)
tweetnacl ed25519 sign x 250 ops/sec ±2.32% (79 runs sampled)
tweetnacl ed25519 verify x 156 ops/sec ±0.91% (72 runs sampled)
native ed25519 sign x 7,109 ops/sec ±1.27% (90 runs sampled)
native ed25519 verify x 5,498 ops/sec ±0.96% (93 runs sampled)
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
