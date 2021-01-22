const {hash, verify} = require('../');

hash('1234567890');

console.log(verify('1234567890'));