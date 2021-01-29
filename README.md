# password hash

Generate to sha512

Cara menggunakan:

    $ git clone https://github.com/wadahkode/password-hash
    $ npm run start
    
Atau anda bisa mencoba ini di runkit secara langsung:

    let salt = passwordHash.generateSalt(10);
    let hashedPassword = passwordHash.hash('abc', salt);
    console.log(passwordHash.verify('abcd', hashedPassword));
    console.log(passwordHash.verify('abc', hashedPassword));
    
Salin dan tempel saat anda mencoba dirunkit.

Tidak ada yang perlu diinstall.