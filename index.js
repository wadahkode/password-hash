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
    let value = 'sha512:' + hash.digest('hex');
    
    this.salt = salt;
    this.hashedPassword = value;
    
    return this;
  },
  
  salt: undefined,
  
  verify: function(str, salt) {
    // for testing before store in database
    let hash = {
      salt: "cebec50e6dfe",
      hashedPassword: "sha512:90844403b749bd23d83dfda7b0d729efbf0c4a0d8d12ae6d9c457f3e8c8adec99bcbc9a1ddf6847646aa906dd4849e4f58d0b07b9ac3ba5ca3e0beffe48867cb"
    };
    
    let data = password.hasher(str, hash.salt);
    return (data.hashedPassword == hash.hashedPassword) ? true : false;
  }
};

module.exports = password;