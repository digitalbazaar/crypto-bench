const base58 = require('base58-universal');
const {deriveSecret, generateKeyPair} = require('./dsm-crypto');

async function run() {
  // generate new key
  // const {publicKey, privateKey} = await _generate();

  // use static keys
  const {publicKey, privateKey} = await _staticKeys();

  const t = await deriveSecret({
    privateKey,
    remotePublicKey: publicKey,
  });
  console.log('SharedSecret', base58.encode(t));
}

run().catch(console.error);

// eslint-disable-next-line no-unused-vars
async function _generate() {
  const {publicKey, privateKey} = await generateKeyPair();

  console.log('NEW KEYS:');
  console.log('privateKey', base58.encode(privateKey));
  console.log('publicKey', base58.encode(publicKey));

  return {publicKey, privateKey};
}

async function _staticKeys() {
  return {
    publicKey: base58.decode('FN71qE45eW2a7o8KnyXo1CvU3uwSbEM9EenbCDPLpb7p'),
    privateKey: base58.decode('F2M238CGR8EnnqEvZWsFtHAz1pDTg6cYE9B85d8eK7EW'),
  };
}
