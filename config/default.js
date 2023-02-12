module.exports = {
    // express
    port: 3001,
    
    // bcrypt
    saltRounds: 10,

    // JWT
    accessTokenTtl: "3h",
    refreshTokenTtl: "10h",
    verificationTokenTtl: "5m",
    passwordResetTokenTtl: "5m",


    // Redis
    redisPort:6379,
    redisHost: '127.0.0.1',
    verifyEmailEX : 300,
    refreshTokenCacheEX: 1000,

    // Nodemailer
    emailSender: 'cse.170201013@gmail.com',
    smtpHost: 'smtp.gmail.com',
    smtpPort: 465,
    nodemailerAuthType: 'OAuth2'

};
