'use strict';

// const assert = require('assert');
const blake2 = require('blake2');
const bs58 = require('bs58');
const chloride = require('chloride');
const crypto = require('crypto');
const constants = require('./constants');
const ed25519 = require('ed25519');
const forge = require('node-forge');
const jsonld = require('jsonld');
const sampleData = require('./sample-data');
const nacl = require('tweetnacl');
// const uuid = require('uuid/v4');
const {rsa} = forge.pki;
const xxhash = require('xxhash-wasm');
const Benchmark = require('benchmark');
const XXHash = require('xxhash');

const suite = new Benchmark.Suite();

const chlorideKeypair = chloride.crypto_sign_keypair();
const forgeKeypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});
const naclKeypair = nacl.sign.keyPair();
const nativeEd25519KeyPair = {
  publicKey: bs58.decode('GycSSui454dpYRKiFdsQ5uaE8Gy3ac6dSMPcAoQsk8yq'),
  privateKey: bs58.decode(
    '3Mmk4UzTRJTEtxaKk61LxtgUxAa2Dg36jF6VogPtRiKvfpsQWKPCLesKSV182RMmvM' +
    'JKk6QErH3wgdHp8itkSSiF')
};

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
  // console.log('DDDDDDD', doc);
  // for(let i = 0; i < 100000; ++i) {
  //   const myString = uuid();
  //   const a = parseInt(wasmHasher.h32('abccde', 0xCAFEBABE), 16);
  //   const b = XXHash.hash(Buffer.from('abccde'), 0xCAFEBABE);
  //   // console.log('wasm', a);
  //   // console.log('nan', b);
  //   assert.equal(a, b);
  // }
  let digest;
  let signature;
  const myString = doc;
  const myBuffer = Buffer.from(myString, 'utf8');

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
    .add('forge sha256', () => {
      const md = forge.md.sha256.create();
      md.update(myString);
      return md.digest().toHex();
    })
    .add('blake2', () => {
      const md = blake2.createHash('blake2b', {digestLength: 32});
      md.update(Buffer.from(myString, 'utf8'));
      return md.digest('base64');
    })
    .add('chloride sign', () => {
      const md = crypto.createHash('sha256');
      md.update(myString, 'utf8');
      const sha256Hash = md.digest('hex');
      const myHashBuffer = Buffer.from(sha256Hash);
      signature = chloride.crypto_sign_detached(
        myHashBuffer, chlorideKeypair.secretKey).toString('base64');
      // console.log('Signature', signature);
    })
    .add('chloride verify', () => {
      const md = crypto.createHash('sha256');
      md.update(myString, 'utf8');
      const sha256Hash = md.digest('hex');
      const myHashBuffer = Buffer.from(sha256Hash);
      const verified = chloride.crypto_sign_verify_detached(
        Buffer.from(signature, 'base64'), myHashBuffer,
        chlorideKeypair.publicKey);
      // console.log('Verified', verified);
    })
    .add('forge RSA 2048 sign', () => {
      digest = forge.md.sha256.create();
      digest.update(myString, 'utf8');
      signature = forgeKeypair.privateKey.sign(digest);
      // console.log('Signature', signature);
    })
    .add('forge RSA 2048 verify', () => {
      const verified = forgeKeypair.publicKey.verify(
        digest.digest().bytes(), signature);
      // console.log('Verified', verified);
    })
    .add('node crypto 2048 sign', () => {
      const rsaSign = crypto.createSign('SHA256');
      rsaSign.write(myString);
      signature = rsaSign.sign(nodeRsaKeyPair.privateKeyPem, 'base64');
      // console.log('Signature', signature);
    })
    .add('node crypto 2048 verify', () => {
      const rsaVerify = crypto.createVerify('SHA256');
      rsaVerify.update(myString);
      const verified = rsaVerify.verify(
        nodeRsaKeyPair.publicKeyPem, signature, 'base64');
      // console.log('Verified', verified);
    })
    .add('tweetnacl sign', () => {
      // tweetnacl hashing API only does SHA512 hashes
      const md = forge.md.sha256.create();
      md.update(myString);
      const sha256Hash = md.digest().toHex();
      const myHashBuffer = Buffer.from(sha256Hash);
      const myU8Array = new Uint8Array(myHashBuffer);
      signature = nacl.sign.detached(myU8Array, naclKeypair.secretKey);
      // console.log('Signature', Buffer.from(signature).toString('base64'));
    })
    .add('tweetnacl verify', () => {
      // tweetnacl hashing API only does SHA512 hashes
      const md = forge.md.sha256.create();
      md.update(myString);
      const sha256Hash = md.digest().toHex();
      const myHashBuffer = Buffer.from(sha256Hash);
      const myU8Array = new Uint8Array(myHashBuffer);
      const verified = nacl.sign.detached.verify(
        myU8Array, signature, naclKeypair.publicKey);
      // console.log('Verified', verified);
    })
    .add('native ed25519 sign', () => {
      const md = crypto.createHash('sha256');
      md.update(myString, 'utf8');
      const sha256Hash = md.digest('hex');
      const myHashBuffer = Buffer.from(sha256Hash);
      signature = ed25519.Sign(myHashBuffer, nativeEd25519KeyPair.privateKey)
        .toString('base64');
      // console.log('Signature', signature);
    })
    .add('native ed25519 verify', () => {
      const md = crypto.createHash('sha256');
      md.update(myString, 'utf8');
      const sha256Hash = md.digest('hex');
      const myHashBuffer = Buffer.from(sha256Hash);
      const verified = ed25519.Verify(
        myHashBuffer, Buffer.from(signature, 'base64'),
        nativeEd25519KeyPair.publicKey);
      // console.log('Verified', verified);
    })
    .on('cycle', event => {
      console.log(String(event.target));
    })
    // .on('complete', function() {
    //   console.log('Fastest is ' + this.filter('fastest').map('name'));
    // })
    .run();
}

foo();
