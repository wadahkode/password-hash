const password = require('../');

const hashedPassword = password.hash('1234567890');
const sampleTrue = password.verify('1234567890', hashedPassword);
const sampleFalse = password.verify('123456', hashedPassword);

console.log(sampleTrue, hashedPassword);
console.log(sampleFalse, hashedPassword);