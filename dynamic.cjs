const global = globalThis || window || self

module.exports = {
    // check the environment dynamically
    webcrypto: global.crypto != null ? global.crypto : require('crypto').webcrypto
}
