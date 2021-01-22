const password = require('../');

const {salt, hashedPassword} = password.hash('1234567890');
const sampleTrue = password.verify('1234567890', salt);
const sampleFalse = password.verify('123456', salt);

console.log(sampleTrue, hashedPassword);
console.log(sampleFalse, hashedPassword);