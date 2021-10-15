// check the environment dynamically

const isNode = typeof process === 'object'
const webcrypto = isNode ? require('crypto').webcrypto : globalThis.crypto

module.exports = { webcrypto }
