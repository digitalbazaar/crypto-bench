'use strict';

const base58 = require('base58-universal');
const crypto = require('crypto');
const constants = require('./constants');
const ed25519Util = require('@digitalbazaar/ed25519-util');
const forge = require('node-forge');
const jsonld = require('jsonld');
const sampleData = require('./sample-data');
const nacl = require('tweetnacl');
const {rsa} = forge.pki;
const sodium = require('sodium-native');
const Benchmark = require('benchmark');
const stableEd25519 = require('@stablelib/ed25519');

const suite = new Benchmark.Suite();

const forgeKeypair = rsa.generateKeyPair({bits: 2048, e: 0x10001});
const naclKeypair = nacl.sign.keyPair();

const publicKey = new Buffer.alloc(sodium.crypto_sign_PUBLICKEYBYTES);
const privateKey = new Buffer.alloc(sodium.crypto_sign_SECRETKEYBYTES);
sodium.crypto_sign_keypair(publicKey, privateKey);
const privateKeyBase58 = base58.encode(privateKey);
const ed25519PublicKeyUint8 = Uint8Array.from(publicKey);
const ed25519PublicKeyBase58 = base58.encode(ed25519PublicKeyUint8);

const nodejsEd25519PrivateKey = crypto.createPrivateKey({
  // node is more than happy to create a new private key using a DER
  key: ed25519Util.privateKeyDerEncode({privateKeyBytes: privateKey}),
  format: 'der',
  type: 'pkcs8'
});
const nodejsEd25519PublicKey = crypto.createPublicKey(nodejsEd25519PrivateKey);

const dalekDb = require('./ed25519-dalek-db/index.node');

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

const {generateKeyPairSync, verify} = crypto;
function nodeGenerateRsaNative() {
  // eslint-disable-next-line no-unused-vars
  const k = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicExponent: 0x10001,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
}

// const ed25519PrivateKeyUint8 = Uint8Array.from(privateKey);

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
  const doc = await jsonld.canonize(sampleData, {
    algorithm: 'URDNA2015',
    format: 'application/n-quads'
  });

  const myString = doc;

  const encoder = new TextEncoder();
  const myStringUint8 = encoder.encode(myString);
  const myStringBuffer = Buffer.from(myStringUint8);

  const signature = Buffer.alloc(sodium.crypto_sign_BYTES);
  sodium.crypto_sign_detached(signature, myStringBuffer, privateKey);
  const ed25519SignatureUint8 = Uint8Array.from(signature);
  const ed25519SignaturBase64 = signature.toString('base64');

  // console.log('JS UINT', myStringUint8);
  // const uuuu = dalekDb.sign3(privateKeyBase58, myStringUint8);
  // console.log('DALEK3', uuuu);
  // const ssss = dalekDb.sign4(privateKeyBase58, myString);
  // console.log('DALEK4', ssss);

  let rsaSignature;

  suite
    // .add('Node.js crypto sha1', () => {
    //   const md = crypto.createHash('sha1');
    //   md.update(myString, 'utf8');
    //   return md.digest('hex');
    // })
    // .add('Node.js crypto sha256', () => {
    //   const md = crypto.createHash('sha256');
    //   md.update(myString, 'utf8');
    //   return md.digest('hex');
    // })
    // .add('Node.js crypto 10.x+ blake2b512', () => {
    //   const md = crypto.createHash('blake2b512');
    //   md.update(myString, 'utf8');
    //   const hash = md.digest('base64');
    //   return hash;
    // })
    // .add('forge sha256', () => {
    //   const md = forge.md.sha256.create();
    //   md.update(myString);
    //   return md.digest().toHex();
    // })
    // .add('sodium-native blake2 aka generichash', () => {
    //   // using 64 byte output for parity with OpenSSL `blake2b512`
    //   const output = Buffer.allocUnsafe(64);
    //   sodium.crypto_generichash(output, myStringBuffer);
    //   return output.toString('base64');
    // })
    // .add('forge RSA 2048 sign', () => {
    //   const md = forge.md.sha256.create();
    //   const pss = forge.pss.create({
    //     md,
    //     mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
    //     saltLength: md.digestLength
    //   });
    //   md.update(myString, 'utf8');
    //   rsaSignature = forgeKeypair.privateKey.sign(md, pss);
    //   // console.log('Signature', signature);
    // })
    // .add('forge RSA 2048 verify', () => {
    //   const md = forge.md.sha256.create();
    //   const pss = forge.pss.create({
    //     md,
    //     mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
    //     saltLength: md.digestLength
    //   });
    //   md.update(myString, 'utf8');
    //   const verified = forgeKeypair.publicKey.verify(
    //     md.digest().bytes(), rsaSignature, pss);
    //   if(!verified) {
    //     throw new Error('Verification failed.');
    //   }
    // })
    // .add('Node.js crypto RSA generateKeySync', () => {
    //   nodeGenerateRsaNative();
    // })
    // .add('Node.js crypto 2048 sign', () => {
    //   const rsaSign = crypto.createSign('RSA-SHA256');
    //   rsaSign.update(myString);
    //   rsaSignature = rsaSign.sign({
    //     key: nodeRsaKeyPair.privateKeyPem,
    //     padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    //     saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    //   }, 'base64');
    //   // console.log('Signature', signature);
    // })
    // .add('Node.js crypto 2048 verify', () => {
    //   const rsaVerify = crypto.createVerify('RSA-SHA256');
    //   rsaVerify.update(myString);
    //   const verified = rsaVerify.verify({
    //     key: nodeRsaKeyPair.publicKeyPem,
    //     padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    //     saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    //   }, rsaSignature, 'base64');
    //   if(!verified) {
    //     throw new Error('Verification failed.');
    //   }
    // })
    .add('tweetnacl ed25519 verify', () => {
      const verified = nacl.sign.detached.verify(
        myStringUint8, signature, publicKey);
      if(!verified) {
        throw new Error('Verification failed.');
      }
    })
    .add('@stablelib/ed25519 ed25519 verify', () => {
      const verified = stableEd25519.verify(
        publicKey, myStringUint8, signature);
      if(!verified) {
        throw new Error('Verification failed.');
      }
    })
    .add('Node.js crypto ed25519 verify', () => {
      try {
        const verified = verify(
          null, myStringBuffer, nodejsEd25519PublicKey, signature);
        if(!verified) {
          throw new Error('Verification failed.');
        }
      } catch(e) {
        console.log('EEEEEEEEE', e);
        throw e;
      }
    })
    .add('sodium-native ed25519 verify', () => {
      const verified = sodium.crypto_sign_verify_detached(
        Buffer.from(signature, 'base64'), myStringBuffer, publicKey);
      if(!verified) {
        throw new Error('Verification failed.');
      }
    })
    .add('Dalek ed25519 verify', () => {
      const verified = dalekDb.verify(
        ed25519PublicKeyBase58, ed25519SignaturBase64, myStringUint8);
      if(!verified) {
        throw new Error('Verification failed.');
      }
    })
    .add('tweetnacl ed25519 sign', () => {
      const signature = nacl.sign.detached(
        myStringUint8, naclKeypair.secretKey);
      const result = Buffer.from(signature).toString('base64');
      // console.log('TWEET', result);
      if(signature.length !== 64) {
        throw new Error('Signature error.');
      }
      return result;
    })
    .add('Node.js crypto ed25519 sign', () => {
      // adding a base58 decode on private key for parity with dalek
      base58.decode(privateKeyBase58);
      const result = crypto.sign(null, myStringUint8, nodejsEd25519PrivateKey);
      const base64 = Buffer.from(result).toString('base64');
      // console.log('NODEJS', base64);
      return base64;
    })
    .add('sodium-native ed25519 sign', () => {
      // adding a base58 decode on private key for parity with dalek
      base58.decode(privateKeyBase58);
      const signature = Buffer.allocUnsafe(sodium.crypto_sign_BYTES);
      sodium.crypto_sign_detached(signature, myStringBuffer, privateKey);
      const result = signature.toString('base64');
      // console.log('SODIUM', result);
      return result;
    })
    .add('Dalek DB sign return Uint8Array', () => {
      try {
        const signature = dalekDb.sign2(privateKeyBase58, myStringUint8);
        const result = Buffer.from(signature).toString('base64');
        return result;
      } catch(e) {
        console.log('EEEEEEEEE', e);
        throw e;
      }
    })
    .add('Dalek DB sign Uint8Array in JS return base64 string', () => {
      try {
        const signature = dalekDb.sign3(privateKeyBase58, myStringUint8);
        // console.log('DALEK3', signature);
        return signature;
      } catch(e) {
        console.log('EEEEEEEEE', e);
        throw e;
      }
    })
    .add('Dalek sign Uint8Array inc/encoded in JS return base64 string', () => {
      try {
        const stringU8 = encoder.encode(myString);
        const signature = dalekDb.sign3(privateKeyBase58, stringU8);
        // console.log('DALEK3', signature);
        return signature;
      } catch(e) {
        console.log('EEEEEEEEE', e);
        throw e;
      }
    })
    .add('Dalek DB sign message string return base64 string', () => {
      try {
        const signature = dalekDb.sign4(privateKeyBase58, myString);
        // console.log('DALEK4', signature);
        return signature;
      } catch(e) {
        console.log('EEEEEEEEE', e);
        throw e;
      }
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
