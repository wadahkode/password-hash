const password = require('../');

let salt = password.generateSalt(12);
let hashedPassword = password.hash('abc', salt);

console.log(JSON.stringify(hashedPassword).length);
console.log(password.verify('abcd', hashedPassword));
console.log(password.verify('abc', hashedPassword));