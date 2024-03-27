# crypto-bench

### Node.js 20.12.0 AMD Ryzen 5 3600 with `sha_ni` capability 20240327
```
Node.js crypto sha1 x 67,508 ops/sec ±0.78% (97 runs sampled)
Node.js crypto sha256 x 63,241 ops/sec ±1.34% (94 runs sampled)
Node.js 20.12.0+ crypto.hash sha256 x 65,912 ops/sec ±0.36% (98 runs sampled)
Node.js crypto 10.x+ blake2b512 x 34,059 ops/sec ±0.79% (95 runs sampled)
forge sha256 x 1,564 ops/sec ±4.05% (57 runs sampled)
sodium-native blake2 aka generichash x 39,613 ops/sec ±0.54% (97 runs sampled)
forge RSA 2048 sign x 37.30 ops/sec ±1.50% (66 runs sampled)
forge RSA 2048 verify x 799 ops/sec ±0.79% (94 runs sampled)
Node.js crypto RSA generateKeySync x 5.84 ops/sec ±28.78% (20 runs sampled)
Node.js crypto 2048 sign x 804 ops/sec ±0.54% (97 runs sampled)
Node.js crypto 2048 verify x 6,227 ops/sec ±1.32% (97 runs sampled)
tweetnacl ed25519 sign x 220 ops/sec ±3.75% (70 runs sampled)
tweetnacl ed25519 verify x 95.84 ops/sec ±3.97% (46 runs sampled)
@stablelib/ed25519 ed25519 sign x 201 ops/sec ±3.89% (65 runs sampled)
@stablelib/ed25519 ed25519 verify x 104 ops/sec ±5.46% (58 runs sampled)
noble-ed25519 ed25519 sign x 899 ops/sec ±118.39% (82 runs sampled)
noble-ed25519 ed25519 verify x 573 ops/sec ±1.12% (83 runs sampled)
Node.js crypto ed25519 sign x 10,029 ops/sec ±1.07% (96 runs sampled)
Node.js crypto ed25519 verify x 7,512 ops/sec ±0.39% (97 runs sampled)
sodium-native ed25519 sign x 7,674 ops/sec ±0.44% (99 runs sampled)
sodium-native ed25519 verify x 9,178 ops/sec ±0.44% (96 runs sampled)
ed2curve ed25519 pub key => x25519 pub key x 612 ops/sec ±4.57% (72 runs sampled)
noble-ed25519 ed25519 pub key => x25519 pub key x 6,606 ops/sec ±0.77% (97 runs sampled)
ed2curve ed25519 pri key => x25519 pri key x 289,794 ops/sec ±0.92% (97 runs sampled)
noble-ed25519 ed25519 pri key => x25519 pri key x 5,853 ops/sec ±1.14% (85 runs sampled)
tweetnacl x25519 derive secret x 1,674 ops/sec ±0.31% (99 runs sampled)
noble-ed25519 x25519 derive secret x 937 ops/sec ±0.72% (97 runs sampled)
Node.js XChaCha20Poly1305 encrypt x 1,652 ops/sec ±2.38% (79 runs sampled)
Node.js XChaCha20Poly1305 decrypt x 1,442 ops/sec ±1.47% (84 runs sampled)
Node.js XChaCha20Poly1305 encrypt w/stablelib subkey x 1,721 ops/sec ±1.29% (83 runs sampled)
Node.js XChaCha20Poly1305 decrypt w/stablelib subkey x 1,533 ops/sec ±1.21% (85 runs sampled)
stablelib XChaCha20Poly1305 encrypt x 112 ops/sec ±1.70% (77 runs sampled)
stablelib XChaCha20Poly1305 decrypt x 302 ops/sec ±1.35% (84 runs sampled)
```

### Node.js v16.16.0 Intel(R) Core(TM) i7-4710MQ CPU @ 2.50GHz
```
Node.js crypto sha1 x 27,297 ops/sec ±0.82% (91 runs sampled)
Node.js crypto sha256 x 12,958 ops/sec ±1.40% (91 runs sampled)
Node.js crypto 10.x+ blake2b512 x 21,778 ops/sec ±1.88% (88 runs sampled)
forge sha256 x 1,605 ops/sec ±9.80% (72 runs sampled)
sodium-native blake2 aka generichash x 35,328 ops/sec ±0.93% (93 runs sampled)
forge RSA 2048 sign x 30.60 ops/sec ±2.62% (55 runs sampled)
forge RSA 2048 verify x 602 ops/sec ±1.02% (90 runs sampled)
Node.js crypto RSA generateKeySync x 9.15 ops/sec ±25.04% (18 runs sampled)
Node.js crypto 2048 sign x 699 ops/sec ±0.96% (90 runs sampled)
Node.js crypto 2048 verify x 7,149 ops/sec ±0.96% (87 runs sampled)
tweetnacl ed25519 sign x 143 ops/sec ±4.73% (65 runs sampled)
tweetnacl ed25519 verify x 73.39 ops/sec ±4.30% (53 runs sampled)
@stablelib/ed25519 ed25519 sign x 146 ops/sec ±4.43% (58 runs sampled)
@stablelib/ed25519 ed25519 verify x 76.29 ops/sec ±3.19% (60 runs sampled)
noble-ed25519 ed25519 sign x 633 ops/sec ±88.01% (82 runs sampled)
noble-ed25519 ed25519 verify x 282 ops/sec ±2.12% (80 runs sampled)
Node.js crypto ed25519 sign x 6,987 ops/sec ±0.47% (89 runs sampled)
Node.js crypto ed25519 verify x 5,577 ops/sec ±1.10% (92 runs sampled)
sodium-native ed25519 sign x 4,915 ops/sec ±0.46% (93 runs sampled)
sodium-native ed25519 verify x 6,108 ops/sec ±0.44% (94 runs sampled)
ed2curve ed25519 pub key => x25519 pub key x 540 ops/sec ±5.20% (67 runs sampled)
noble-ed25519 ed25519 pub key => x25519 pub key x 3,157 ops/sec ±0.45% (94 runs sampled)
ed2curve ed25519 pri key => x25519 pri key x 203,302 ops/sec ±1.38% (90 runs sampled)
noble-ed25519 ed25519 pri key => x25519 pri key x 2,757 ops/sec ±2.26% (80 runs sampled)
tweetnacl x25519 derive secret x 1,083 ops/sec ±0.62% (94 runs sampled)
noble-ed25519 x25519 derive secret x 440 ops/sec ±0.51% (91 runs sampled)
Node.js XChaCha20Poly1305 encrypt x 1,215 ops/sec ±1.04% (82 runs sampled)
Node.js XChaCha20Poly1305 decrypt x 908 ops/sec ±2.27% (65 runs sampled)
Node.js XChaCha20Poly1305 encrypt w/stablelib subkey x 1,222 ops/sec ±1.15% (79 runs sampled)
Node.js XChaCha20Poly1305 decrypt w/stablelib subkey x 897 ops/sec ±1.44% (64 runs sampled)
stablelib XChaCha20Poly1305 encrypt x 78.42 ops/sec ±4.10% (75 runs sampled)
stablelib XChaCha20Poly1305 decrypt x 207 ops/sec ±2.95% (79 runs sampled)
```

### Node.js 14.16.0 AMD Ryzen 5 3600 with `sha_ni` capability
```
Node.js crypto sha1 x 68,168 ops/sec ±1.11% (91 runs sampled)
Node.js crypto sha256 x 64,057 ops/sec ±1.28% (94 runs sampled)
Node.js crypto 10.x+ blake2b512 x 34,275 ops/sec ±1.23% (98 runs sampled)
forge sha256 x 1,953 ops/sec ±8.30% (68 runs sampled)
sodium-native blake2 aka generichash x 40,502 ops/sec ±0.19% (96 runs sampled)
forge RSA 2048 sign x 49.76 ops/sec ±1.20% (66 runs sampled)
forge RSA 2048 verify x 872 ops/sec ±0.52% (96 runs sampled)
Node.js crypto RSA generateKeySync x 17.64 ops/sec ±16.77% (22 runs sampled)
Node.js crypto 2048 sign x 1,162 ops/sec ±0.11% (98 runs sampled)
Node.js crypto 2048 verify x 21,501 ops/sec ±0.51% (95 runs sampled)
tweetnacl ed25519 sign x 215 ops/sec ±4.42% (61 runs sampled)
tweetnacl ed25519 verify x 97.65 ops/sec ±4.77% (56 runs sampled)
@stablelib/ed25519 ed25519 sign x 219 ops/sec ±4.35% (60 runs sampled)
@stablelib/ed25519 ed25519 verify x 98.90 ops/sec ±4.52% (56 runs sampled)
noble-ed25519 ed25519 sign x 1,701 ops/sec ±0.81% (86 runs sampled)
noble-ed25519 ed25519 verify x 382 ops/sec ±0.95% (85 runs sampled)
Node.js crypto ed25519 sign x 10,451 ops/sec ±0.12% (98 runs sampled)
Node.js crypto ed25519 verify x 7,620 ops/sec ±0.09% (97 runs sampled)
sodium-native ed25519 sign x 7,705 ops/sec ±0.19% (96 runs sampled)
sodium-native ed25519 verify x 9,054 ops/sec ±0.11% (96 runs sampled)
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
