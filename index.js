const crypt = require('crypto'),
/**
 * Password hash and verify
 * 
 * @author wadahkode <mvp.dedefilaras@gmail.com>
 * @since version 1.0.0
 */
password = {
  hash: function(str="", max=12) {
    try {
      if (max > 12) {
        throw new Error('panjang password maksimal 12!');
      } else {
        let salt = crypt.randomBytes(Math.ceil(max / 2)).toString('hex').slice(0, max);
        
        return password.hasher(str, salt);
      }
    } catch (e) {
      console.log('warning: %s', e.message);
    }
  },
  
  hasher: function(password, salt) {
    let hash = crypt.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    
    this.salt = salt;
    this.hashedPassword = value;
    
    return this;
  },
  
  verify: function(str) {
    let data = password.hasher(str, password.salt);
    
    return (data.hashedPassword == password.hashedPassword) ? true : false;
  }
};

module.exports = password;