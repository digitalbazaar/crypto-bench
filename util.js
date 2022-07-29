/*!
 * Copyright (c) 2018-2022 Digital Bazaar, Inc. All rights reserved.
 */
const {asn1, oids, util} = require('node-forge');
const {ByteBuffer} = util;
const {ChaCha20Poly1305} = require('@stablelib/chacha20poly1305');
const crypto = require('crypto');
const {streamXOR} = require('@stablelib/chacha');

// constants are based on the string: "expand 32-byte k"
const CHACHA20_CONSTANTS = [
  0x61707865, // "expa" referred to as the "sigma" constant
  0x3320646E, // "nd 3" keys used here must be 32-bytes
  0x79622D32, // "2-by"
  0x6B206574, // "te k"
];
const LE = true;
const NULL_DATA = new Uint8Array(64);

/**
 * Wraps Base58 decoding operations in
 * order to provide consistent error messages.
 * @ignore
 * @example
 * > const pubkeyBytes = _base58Decode({
 *    decode: base58.decode,
 *    keyMaterial: this.publicKeyBase58,
 *    type: 'public'
 *   });
 * @param {object} options - The decoder options.
 * @param {Function} options.decode - The decode function to use.
 * @param {string} options.keyMaterial - The Base58 encoded
 * key material to decode.
 * @param {string} options.type - A description of the
 * key material that will be included
 * in an error message (e.g. 'public', 'private').
 *
 * @returns {object} - The decoded bytes. The data structure for the bytes is
 *   determined by the provided decode function.
 */
module.exports.base58Decode = ({decode, keyMaterial, type}) => {
  let bytes;
  try {
    bytes = decode(keyMaterial);
  } catch(e) {
    // do nothing
    // the bs58 implementation throws, forge returns undefined
    // this helper throws when no result is produced
  }
  if(bytes === undefined) {
    throw new TypeError(`The ${type} key material must be Base58 encoded.`);
  }
  return bytes;
};

module.exports.privateKeyDerEncode = ({privateKeyBytes, seedBytes}) => {
  if(!(privateKeyBytes || seedBytes)) {
    throw new TypeError('`privateKeyBytes` or `seedBytes` is required.');
  }
  if(!privateKeyBytes && !(Buffer.isBuffer(seedBytes) &&
    seedBytes.length === 32)) {
    throw new TypeError('`seedBytes` must be a 32 byte Buffer.');
  }
  if(!seedBytes && !(Buffer.isBuffer(privateKeyBytes) &&
    privateKeyBytes.length === 64)) {
    throw new TypeError('`privateKeyBytes` must be a 64 byte Buffer.');
  }
  let p;
  if(seedBytes) {
    p = seedBytes;
  } else {
    // extract the first 32 bytes of the 64 byte private key representation
    p = Buffer.from(privateKeyBytes.buffer, privateKeyBytes.byteOffset, 32);
  }
  const keyBuffer = new ByteBuffer(p);

  const asn1Key = asn1.create(
    asn1.UNIVERSAL,
    asn1.Type.OCTETSTRING,
    false,
    keyBuffer.getBytes()
  );

  const a = asn1.create(
    asn1.Class.UNIVERSAL,
    asn1.Type.SEQUENCE,
    true, [
      asn1.create(
        asn1.Class.UNIVERSAL, asn1.Type.INTEGER, false,
        asn1.integerToDer(0).getBytes()),
      // privateKeyAlgorithm
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OID,
          false,
          asn1.oidToDer(oids.EdDSA25519).getBytes()
        ),
      ]),
      // private key
      asn1.create(
        asn1.Class.UNIVERSAL, asn1.Type.OCTETSTRING, false,
        asn1.toDer(asn1Key).getBytes()),
    ]
  );

  const privateKeyDer = asn1.toDer(a);
  return Buffer.from(privateKeyDer.getBytes(), 'binary');
};

module.exports.publicKeyDerEncode = ({publicKeyBytes}) => {
  if(!(Buffer.isBuffer(publicKeyBytes) && publicKeyBytes.length === 32)) {
    throw new TypeError('`publicKeyBytes` must be a 32 byte Buffer.');
  }
  // add a zero byte to the front of the publicKeyBytes, this results in
  // the bitstring being 256 bits vs. 170 bits (without padding)
  const zeroBuffer = Buffer.from(new Uint8Array([0]));
  const keyBuffer = new ByteBuffer(Buffer.concat([zeroBuffer, publicKeyBytes]));

  const a = asn1.create(
    asn1.Class.UNIVERSAL,
    asn1.Type.SEQUENCE,
    true, [
      asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
        asn1.create(
          asn1.Class.UNIVERSAL,
          asn1.Type.OID,
          false,
          asn1.oidToDer(oids.EdDSA25519).getBytes()
        ),
      ]),
      // public key
      asn1.create(
        asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false,
        keyBuffer.getBytes()),
    ]
  );

  const publicKeyDer = asn1.toDer(a);
  return Buffer.from(publicKeyDer.getBytes(), 'binary');
};

// node.js xchacha20poly1305 w/node.js chacha20 subkey generation
module.exports.encryptNodeXChaCha20Poly1305 = async ({
  data, additionalData, cek, iv
}) => {
  const {subkey, iv: newIV} = await _generateSubkey({
    cek, nonce: iv, chacha20: _nodeChaCha20
  });

  const cipher = crypto.createCipheriv(
    'chacha20-poly1305', subkey, newIV, {authTagLength: 16});
  if(additionalData) {
    cipher.setAAD(additionalData);
  }
  const encrypted = cipher.update(data);
  const final = cipher.final();
  const ciphertext = final.length > 0 ?
    Buffer.concat([encrypted, final]) : encrypted;
  const tag = cipher.getAuthTag();
  return {ciphertext, iv, tag};
};

// node.js xchacha20poly1305 w/node.js chacha20 subkey generation
module.exports.decryptNodeXChaCha20Poly1305 = async ({
  ciphertext, iv, tag, additionalData, cek
}) => {
  const {subkey, iv: newIV} = await _generateSubkey({
    cek, nonce: iv, chacha20: _nodeChaCha20
  });

  const decipher = crypto.createDecipheriv(
    'chacha20-poly1305', subkey, newIV, {authTagLength: 16});
  decipher.setAuthTag(tag);
  if(additionalData) {
    decipher.setAAD(additionalData);
  }
  decipher.update(ciphertext);
  try {
    decipher.final();
  } catch(e) {
    // ignore tag error
  }
};

// node.js xchacha20poly1305 w/stable lib chacha20 subkey generation
module.exports.encryptNodeXChaCha20Poly1305_StableLibChaCha20 = async ({
  data, additionalData, cek, iv
}) => {
  const {subkey, iv: newIV} = await _generateSubkey({
    cek, nonce: iv, chacha20: _stableLibChaCha20
  });

  const cipher = crypto.createCipheriv(
    'chacha20-poly1305', subkey, newIV, {authTagLength: 16});
  if(additionalData) {
    cipher.setAAD(additionalData);
  }
  const encrypted = cipher.update(data);
  const final = cipher.final();
  const ciphertext = final.length > 0 ?
    Buffer.concat([encrypted, final]) : encrypted;
  const tag = cipher.getAuthTag();
  return {ciphertext, iv, tag};
};

// node.js xchacha20poly1305 w/stable lib chacha20 subkey generation
module.exports.decryptNodeXChaCha20Poly1305_StableLibChaCha20 = async ({
  ciphertext, iv, tag, additionalData, cek
}) => {
  const {subkey, iv: newIV} = await _generateSubkey({
    cek, nonce: iv, chacha20: _stableLibChaCha20
  });

  const decipher = crypto.createDecipheriv(
    'chacha20-poly1305', subkey, newIV, {authTagLength: 16});
  decipher.setAuthTag(tag);
  if(additionalData) {
    decipher.setAAD(additionalData);
  }
  decipher.update(ciphertext);
  try {
    decipher.final();
  } catch(e) {
    // ignore tag error
  }
};

module.exports.encryptStableLibXChaCha20Poly1305 = async ({
  data, additionalData, cek, iv
} = {}) => {
  const {subkey, iv: newIV} = await _generateSubkey({
    cek, nonce: iv, chacha20: _stableLibChaCha20
  });
  const cipher = new ChaCha20Poly1305(subkey);

  // encrypt data
  const encrypted = cipher.seal(newIV, data, additionalData);

  // split ciphertext and tag and return values
  const ciphertext = encrypted.subarray(0, encrypted.length - cipher.tagLength);
  const tag = encrypted.subarray(encrypted.length - cipher.tagLength);
  return {ciphertext, iv, tag};
};

module.exports.decryptStableLibXChaCha20Poly1305 = async ({
  ciphertext, iv, tag, additionalData, cek
}) => {
  const {subkey, iv: newIV} = await _generateSubkey({
    cek, nonce: iv, chacha20: _stableLibChaCha20
  });
  const cipher = new ChaCha20Poly1305(subkey);
  const encrypted = new Uint8Array(ciphertext.length + cipher.tagLength);
  encrypted.set(ciphertext);
  encrypted.set(tag, ciphertext.length);
  try {
    await cipher.open(newIV, encrypted, additionalData);
  } catch(e) {
    // ignore tag error
  }
};

// internal function for XChaCha20Poly1305 subkey generation
function _nodeChaCha20({key, nonce, src}) {
  const cipher = crypto.createCipheriv('chacha20', key, nonce);
  const dst = cipher.update(src);
  const final = cipher.final();
  return final.length > 0 ? Buffer.concat([dst, final]) : dst;
}

// internal function for XChaCha20Poly1305 subkey generation
function _stableLibChaCha20({key, nonce, src}) {
  const dst = new Uint8Array(64);

  // encrypt a single block (1 == full nonce will be used no counter
  // generated)
  try {
    // `nonce` is modified internally, so copy it first
    nonce = Uint8Array.prototype.slice.call(nonce);
    return streamXOR(key, nonce, src, dst, 1);
  } catch(e) {
    // ignore counter overflow error; we don't use the counter
    if(e.message.includes('counter overflow')) {
      return dst;
    }
    throw e;
  }
}

async function _generateSubkey({cek, nonce, chacha20}) {
  // generate subkey and 12-byte IV for ChaCha20Poly1305; first 4 bytes of
  // IV are NULL bytes, last 8 are the last 8 bytes of the randomly generated
  // 24-byte XChaCha20Poly1305 nonce
  const subkey = await _hchacha20({
    key: cek, nonce: nonce.subarray(0, 16), chacha20
  });
  const iv = new Uint8Array(12);
  iv.set(nonce.subarray(16), 4);
  return {subkey, iv};
}

async function _hchacha20({key, nonce, chacha20}) {
  const state = new Array(16);
  for(let i = 0; i < 4; ++i) {
    state[i] = CHACHA20_CONSTANTS[i];
  }
  const dvKey = new DataView(key.buffer, key.byteOffset, key.length);
  for(let i = 0; i < 8; ++i) {
    state[i + 4] = dvKey.getUint32(i * 4, LE);
  }
  const dvNonce = new DataView(nonce.buffer, nonce.byteOffset, nonce.length);
  for(let i = 0; i < 4; ++i) {
    state[i + 12] = dvNonce.getUint32(i * 4, LE);
  }

  // run ChaCha20
  const dst = new Uint8Array(64);
  await chacha20({key, nonce, src: NULL_DATA, dst});

  // generate HChaCha20 output
  const out = new Uint8Array(32);
  const dvOut = new DataView(out.buffer, out.byteOffset, out.length);
  const dvDst = new DataView(dst.buffer, dst.byteOffset, dst.length);
  for(let i = 0; i < 4; ++i) {
    dvOut.setUint32(i * 4, (state[i] - dvDst.getUint32(i * 4, LE)) | 0);
  }
  for(let i = 0; i < 4; ++i) {
    dvOut.setUint32(
      i * 4 + 16, (state[i + 12] - dvDst.getUint32(i * 4 + 48, LE)) | 0);
  }

  return out;
}
