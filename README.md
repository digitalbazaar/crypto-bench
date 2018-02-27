# crypto-bench

```
xxHash wasm x 22,309 ops/sec ±2.65% (80 runs sampled)
xxHash nan x 39,802 ops/sec ±1.13% (78 runs sampled)
node crypto sha1 x 15,641 ops/sec ±0.25% (90 runs sampled)
node crypto sha256 x 9,105 ops/sec ±0.45% (92 runs sampled)
forge sha256 x 1,946 ops/sec ±0.51% (90 runs sampled)
blake2 x 11,608 ops/sec ±2.88% (80 runs sampled)
chloride blake2 aka generichash x 15,307 ops/sec ±2.87% (85 runs sampled)
native chloride ed25519 sign x 4,576 ops/sec ±1.58% (88 runs sampled)
native chloride ed25519 verify x 5,341 ops/sec ±1.69% (89 runs sampled)
forge RSA 2048 sign x 25.38 ops/sec ±1.82% (46 runs sampled)
forge RSA 2048 verify x 528 ops/sec ±0.78% (88 runs sampled)
node crypto 2048 sign x 531 ops/sec ±0.49% (88 runs sampled)
node crypto 2048 verify x 5,520 ops/sec ±0.54% (90 runs sampled)
tweetnacl ed25519 sign x 201 ops/sec ±1.99% (77 runs sampled)
tweetnacl ed25519 verify x 128 ops/sec ±0.39% (73 runs sampled)
native ed25519 sign x 4,912 ops/sec ±1.52% (89 runs sampled)
native ed25519 verify x 4,178 ops/sec ±1.42% (92 runs sampled)
```
