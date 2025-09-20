const jwt = require('jsonwebtoken')

const sigh = process.env.JWT_SECRET

module.exports = {
    generate(data){
        return jwt.sign(data, sigh, {expiresIn: "30d"})
    },
    verify(token){
        return jwt.verify(token, sigh)
    }
}