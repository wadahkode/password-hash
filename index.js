const crypt = require('crypto');
/**
 * Password hash and verify
 * 
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.0.0
 */
let salt = "";

const password = {
  hash: (str="", max=12) => {
    try {
      if (max > 12) {
        throw new Error('panjang password maksimal 12!');
      } else {
        salt = crypt.randomBytes(Math.ceil(max / 2)).toString('hex').slice(0, max);
        
        return generate(str);
      }
    } catch (e) {
      console.log('warning: %s', e.message);
    }
  },
  
  verify: (str, hash) => {
    return (generate(str) == hash) ? true : false;
  }
};

const generate = (password) => {
  let hash = crypt.createHmac('sha512', salt);
  hash.update(password);
  let value = 'sha512:' + hash.digest('hex');
  
  // return {
  //   salt: salt,
  //   hashedPassword: value
  // };
  return value;
};

module.exports = password;