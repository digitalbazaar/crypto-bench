'use strict';

const bs58 = require('bs58');
const chloride = require('chloride');
const crypto = require('crypto');
const constants = require('./constants');
const ed25519 = require('ed25519');
const forge = require('node-forge');
const jsonld = require('jsonld');
const sampleData = require('./sample-data');
const nacl = require('tweetnacl');
const {rsa} = forge.pki;
const {api: sodium} = require('sodium');
const xxhash = require('xxhash-wasm');
const Benchmark = require('benchmark');
const XXHash = require('xxhash');

const suite = new Benchmark.Suite();

const blakeKey = generateKey(sodium.crypto_generichash_KEYBYTES);

const chlorideKeypair = chloride.crypto_sign_keypair();
const forgeKeypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});
const naclKeypair = nacl.sign.keyPair();
const nativeEd25519KeyPair = {
  publicKey: bs58.decode('GycSSui454dpYRKiFdsQ5uaE8Gy3ac6dSMPcAoQsk8yq'),
  privateKey: bs58.decode(
    '3Mmk4UzTRJTEtxaKk61LxtgUxAa2Dg36jF6VogPtRiKvfpsQWKPCLesKSV182RMmvM' +
    'JKk6QErH3wgdHp8itkSSiF')
};

function generateKey(len) {
  const key = Buffer.allocUnsafe(len);
  sodium.randombytes_buf(key, len);
  return key;
}

const nodeRsaKeyPair = {
  publicKeyPem: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArpPmWDG3MCn3simEGNIe\n' +
    'seNe3epn81gLnWXjup458yXgjUYFqKcFlsV5oW4vSF5EEQfPqWB+E5NWYfE9IioQ\n' +
    'mmQjh28BhMXHq94HgQ90nKQ3KTpAMOXNefvcun+qqOyr4Jf8y8esiYHjuitZA03o\n' +
    '9OhzpqJwFzQj7Nxx2dg/3LnkcsP1/RtY5zxnyEGEnxR+Sy+bPXEMbBk0+C3Wrnmn\n' +
    'LxNEwvWKj3iDp4JyLeV3WxWIf3ExgdkOWv3DwVo7pPmrSg+kQaU20QxQycY2xW7J\n' +
    '8xqsqrvR3ICdYIevjFknMHX1LZB5R6nfosG90pWVA2m5LqnAoEMBnG/CUpvxPRYy\n' +
    'jwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  privateKeyPem: '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIIEpQIBAAKCAQEArpPmWDG3MCn3simEGNIeseNe3epn81gLnWXjup458yXgjUYF\n' +
    'qKcFlsV5oW4vSF5EEQfPqWB+E5NWYfE9IioQmmQjh28BhMXHq94HgQ90nKQ3KTpA\n' +
    'MOXNefvcun+qqOyr4Jf8y8esiYHjuitZA03o9OhzpqJwFzQj7Nxx2dg/3LnkcsP1\n' +
    '/RtY5zxnyEGEnxR+Sy+bPXEMbBk0+C3WrnmnLxNEwvWKj3iDp4JyLeV3WxWIf3Ex\n' +
    'gdkOWv3DwVo7pPmrSg+kQaU20QxQycY2xW7J8xqsqrvR3ICdYIevjFknMHX1LZB5\n' +
    'R6nfosG90pWVA2m5LqnAoEMBnG/CUpvxPRYyjwIDAQABAoIBAQCJZBpfBFlQDWdD\n' +
    'jorIYe0IQJGzgjvm9j7F058iik2+/us3I4lmjnPGkYlEs4uAn7df087pVOhEDatp\n' +
    'D0r2bTZ92xtfBcyjKmgW6XjsaDZ05IQI7TABi4lnXAD9wWWU5hXqfpLT6UPvQArx\n' +
    'xBWclR8mRx5lYOdoS3+OdHshX5/63ACCYlYonTov2TkIjvozQY4H5F0M0aaF3naM\n' +
    'GFRus8qmJTrfBmQPBBwRJnPJLQk03hAHXRyUHGHAo5QVZlEdvf5LeOTIfsw2X9ro\n' +
    'xGFBIruS2JfrWHbApTOIYlzCQBpBBM28l4/rvkfEDmugYaZE9LdpQfddQJOrnqXF\n' +
    'xHARbO0JAoGBANjqe0YKPsW/i6MEN0kOhcpYm19GYceXTSgErDsTDeEcvv6o9Chi\n' +
    'baRyNK1tZ+Kff4rMw74Vw+uIfpq5ROiTJ67p094jVmZhgmKsXAqIbapcR+R+bygO\n' +
    'Q3UioXCTCYvPKWL8n8FdgFsBohK4+y5NCgNZ8tIxqvB1fLQDs9AdhOxjAoGBAM4I\n' +
    'g/fUY5oBFS4KrMCQbz+DPzDTgMGrX0ZC7BD6S9jX/AI4Wwm11t/WWGuijUiQaFFd\n' +
    'YUHXVoe6qRuYemND2zUvbpBK84SVVxF3a6lncmpnxiLe2lHbj5/Dh+y/C7HKGiTC\n' +
    'jTfvfe8YAeTpC1djIH0sWPC6n91ulyA23Nz4h6rlAoGBAJVUT0s3cGF4bSvrkhfU\n' +
    'TJyxhT0A2f2qlm5PUTZV9r8bqAzuyS8oG60TBlrCL7te7FHkh3jLyRXT4LypgNvP\n' +
    'uoj65mVN1IQk6rr9R1vk8gJPBxsxQ1rC/wObtKIoR3EdS7OekGhw8xUzuZzEBf+o\n' +
    '/5SxDq5PjQt/BjtzNQ231LNbAoGAGDab+8Y0Jmc2LAEJKGBREq/D/2L74MbZHZLD\n' +
    '14Ly4vsPHNuup0d9hzTTk2K5I+wEtns48Nnzy2O+eAXFbGEPJAL9BWwpjk1WvDDC\n' +
    'sFf99E9Z08NI+RHKoUYDdWlGYJCV3fgXTJmSvUSfBF32/UAjE1Lg6PmlzAoxLJIG\n' +
    'BtoWZ5kCgYEAnvcfRx56ZvUkWJiSI0me+M20A74IGwxDPF87XuGPSEqcoLSc1qJM\n' +
    '6LtOFUE7nFVEqFMN2IhW59qb2eCg7XpeEQic4aqNkc8WtuMEavHRTucsEWk+ypZv\n' +
    'JCxLDG7o3iSqT+DNbYnDI7aUCuM6Guji98q3IvBnW5hj+jbmo4sfRDQ=\n' +
    '-----END RSA PRIVATE KEY-----\n'
};

const nodeDocumentLoader = jsonld.documentLoaders.node();
jsonld.documentLoader = (url, callback) => {
  if(url in constants.CONTEXTS) {
    return callback(
      null, {
        contextUrl: null,
        document: constants.CONTEXTS[url],
        documentUrl: url
      });
  }
  nodeDocumentLoader(url, callback);
};

async function foo() {
  const wasmHasher = await xxhash();
  const doc = await jsonld.canonize(sampleData, {
    algorithm: 'URDNA2015',
    format: 'application/n-quads'
  });

  let signature;
  const myString = doc;

  suite
    .add('xxHash wasm', () => wasmHasher.h32(myString, 0xCAFEBABE))
    .add('xxHash nan', () => XXHash.hash(Buffer.from(myString), 0xCAFEBABE))
    .add('node crypto sha1', () => {
      const md = crypto.createHash('sha1');
      md.update(myString, 'utf8');
      return md.digest('hex');
    })
    .add('node crypto sha256', () => {
      const md = crypto.createHash('sha256');
      md.update(myString, 'utf8');
      return md.digest('hex');
    })
    .add('node 10.x+ crypto blake2b512', () => {
      const md = crypto.createHash('blake2b512');
      md.update(myString, 'utf8');
      const hash = md.digest('base64');
      return hash;
    })
    .add('forge sha256', () => {
      const md = forge.md.sha256.create();
      md.update(myString);
      return md.digest().toHex();
    })
    .add('chloride sha256', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      const hash = chloride.crypto_hash_sha256(myBuffer).toString('hex');
      return hash;
    })
    .add('chloride blake2 aka generichash', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      // using 64 byte output for parity with OpenSSL `blake2b512`
      const hash = chloride.crypto_generichash(myBuffer, 64).toString('base64');
      return hash;
    })
    .add('sodium blake2 aka generichash', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      // using 64 byte output for parity with OpenSSL `blake2b512`
      // sodium.crypto_generichash_BYTES === 32
      const hash = sodium.crypto_generichash(64, myBuffer, blakeKey)
        .toString('base64');
      return hash;
    })
    .add('native chloride ed25519 sign', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      signature = chloride.crypto_sign_detached(
        myBuffer, chlorideKeypair.secretKey).toString('base64');
      // console.log('Signature A', signature);
    })
    .add('native sodium ed25519 sign', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      signature = sodium.crypto_sign_detached(
        myBuffer, chlorideKeypair.secretKey).toString('base64');
      // console.log('Signature B', signature);
    })
    .add('native chloride ed25519 verify', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      const verified = chloride.crypto_sign_verify_detached(
        Buffer.from(signature, 'base64'), myBuffer,
        chlorideKeypair.publicKey);
    })
    .add('native sodium ed25519 verify', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      const verified = sodium.crypto_sign_verify_detached(
        Buffer.from(signature, 'base64'), myBuffer,
        chlorideKeypair.publicKey);
    })
    .add('forge RSA 2048 sign', () => {
      const md = forge.md.sha256.create();
      const pss = forge.pss.create({
        md,
        mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
        saltLength: md.digestLength
      });
      md.update(myString, 'utf8');
      signature = forgeKeypair.privateKey.sign(md, pss);
      // console.log('Signature', signature);
    })
    .add('forge RSA 2048 verify', () => {
      const md = forge.md.sha256.create();
      const pss = forge.pss.create({
        md,
        mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
        saltLength: md.digestLength
      });
      md.update(myString, 'utf8');
      const verified = forgeKeypair.publicKey.verify(
        md.digest().bytes(), signature, pss);
      // console.log('Verified', verified);
    })
    .add('node crypto 2048 sign', () => {
      const rsaSign = crypto.createSign('RSA-SHA256');
      rsaSign.update(myString);
      signature = rsaSign.sign({
        key: nodeRsaKeyPair.privateKeyPem,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
      }, 'base64');
      // console.log('Signature', signature);
    })
    .add('node crypto 2048 verify', () => {
      const rsaVerify = crypto.createVerify('RSA-SHA256');
      rsaVerify.update(myString);
      const verified = rsaVerify.verify({
        key: nodeRsaKeyPair.publicKeyPem,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
      }, signature, 'base64');
      // console.log('Verified', verified);
    })
    .add('tweetnacl ed25519 sign', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      const myU8Array = new Uint8Array(myBuffer);
      signature = nacl.sign.detached(myU8Array, naclKeypair.secretKey);
      // console.log('Signature', Buffer.from(signature).toString('base64'));
    })
    .add('tweetnacl ed25519 verify', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      const myU8Array = new Uint8Array(myBuffer);
      const verified = nacl.sign.detached.verify(
        myU8Array, signature, naclKeypair.publicKey);
      // console.log('Verified', verified);
    })
    .add('native ed25519 sign', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      signature = ed25519.Sign(myBuffer, nativeEd25519KeyPair.privateKey)
        .toString('base64');
      // console.log('Signature', signature);
    })
    .add('native ed25519 verify', () => {
      const myBuffer = Buffer.from(myString, 'utf8');
      const verified = ed25519.Verify(
        myBuffer, Buffer.from(signature, 'base64'),
        nativeEd25519KeyPair.publicKey);
      // console.log('Verified', verified);
    })
    .on('cycle', event => {
      console.log(String(event.target));
    })
    // .on('error', console.error)
    // .on('complete', function() {
    //   console.log('Fastest is ' + this.filter('fastest').map('name'));
    // })
    .run();
}

foo();
