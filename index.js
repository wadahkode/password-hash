const crypt = require('crypto');
/**
 * Password hash and verify
 * 
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.0.0
 */
const generateSalt = (max=12) => {
  try {
    if (max > 12) {
      throw new Error('panjang password maksimal 12!');
    } else {
      return crypt.randomBytes(Math.ceil(max / 2)).toString('hex').slice(0, max);
    }
  } catch (e) {
    console.log('warning: %s', e.message);
  }
};
  
const hash = (password, salt) => {
  let hash = crypt.createHmac('sha512', salt);
  hash.update(password);
  let value = 'sha512:' + hash.digest('hex');
  
  return {
    salt: salt,
    hashedPassword: value
  };
};

const verify = (password, data) => {
  let gen = hash(password, data.salt);
  return (gen.hashedPassword == data.hashedPassword) ? true : false;
};

module.exports = {
  generateSalt,
  hash,
  verify
};