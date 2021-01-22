const password = require('../');

const {salt, hashedPassword} = password.hash('1234567890');
const result = password.verify('1234567890', salt);

console.log(result, hashedPassword);