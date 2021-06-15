const _publicKeyNode12 = require('./ed25519PublicKeyNode12');
const sodium = require('sodium-native');
const {createPrivateKey, sign, verify} = require('crypto');

const DER_PRIVATE_KEY_PREFIX = Buffer.from(
  '302e020100300506032b657004220420', 'hex');

const publicKey = new Buffer.alloc(sodium.crypto_sign_PUBLICKEYBYTES);
const privateKey = new Buffer.alloc(sodium.crypto_sign_SECRETKEYBYTES);
sodium.crypto_sign_keypair(publicKey, privateKey);

const nodejsEd25519PublicKey = _publicKeyNode12.create(
  {publicKeyBytes: publicKey});

const nodejsEd25519PrivateKey = createPrivateKey({
  key: Buffer.concat([DER_PRIVATE_KEY_PREFIX, privateKey.slice(0, 32)]),
  format: 'der',
  type: 'pkcs8'
});

const encoder = new TextEncoder();
const myStringUint8 = encoder.encode('hello');

const signature = sign(
  null, myStringUint8, nodejsEd25519PrivateKey);
if(signature.length !== 64) {
  throw new Error('Signature error.');
}

console.log('Signature', signature.toString('base64'));

const verified = verify(
  null, myStringUint8, nodejsEd25519PublicKey, signature);
if(!verified) {
  throw new Error('Verification failed.');
}

console.log('VERFIED', verified);
