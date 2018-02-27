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
  //   const b = XXHash.hash(new Buffer('abccde'), 0xCAFEBABE);
  //   // console.log('wasm', a);
  //   // console.log('nan', b);
  //   assert.equal(a, b);
  // }
  let digest;
  let signature;
  const myString = doc;
  const myBuffer = new Buffer(myString, 'utf8');
  const myU8Array = new Uint8Array(myBuffer);

  suite
    .add('xxHash wasm', () => wasmHasher.h32(myString, 0xCAFEBABE))
    .add('xxHash nan', () => XXHash.hash(new Buffer(myString), 0xCAFEBABE))
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
      md.update(new Buffer(myString, 'utf8'));
      return md.digest('base64');
    })
    .add('chloride sign', () => {
      signature = chloride.crypto_sign_detached(
        myBuffer, chlorideKeypair.secretKey).toString('base64');
      // console.log('Signature', signature);
    })
    .add('chloride verify', () => {
      const verified = chloride.crypto_sign_verify_detached(
        new Buffer(signature, 'base64'), myBuffer, chlorideKeypair.publicKey);
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
    .add('tweetnacl sign', () => {
      signature = nacl.sign.detached(myU8Array, naclKeypair.secretKey);
      // console.log('Signature', new Buffer(signature).toString('base64'));
    })
    .add('tweetnacl verify', () => {
      const verified = nacl.sign.detached.verify(
        myU8Array, signature, naclKeypair.publicKey);
      // console.log('Verified', verified);
    })
    .add('native ed25519 sign', () => {
      signature = ed25519.Sign(myBuffer, nativeEd25519KeyPair.privateKey)
        .toString('base64');
      // console.log('Signature', signature);
    })
    .add('native ed25519 verify', () => {
      const verified = ed25519.Verify(
        myBuffer, new Buffer(signature, 'base64'),
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
