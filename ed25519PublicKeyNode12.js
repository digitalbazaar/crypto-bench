/*!
 * Copyright (c) 2019-2020 Digital Bazaar, Inc. All rights reserved.
 */
const {createPublicKey} = require('crypto');
const {publicKeyDerEncode} = require('./util');

module.exports.create = ({publicKeyBytes}) => {
  return createPublicKey({
    key: publicKeyDerEncode({publicKeyBytes}),
    format: 'der',
    type: 'spki'
  });
};
