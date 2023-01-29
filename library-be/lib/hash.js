const bcrypt = require('bcrypt')
const saltRounds = 10

// Hash received password
const hashPassword = async(password) => {
    try {
        return await bcrypt.hash(password, saltRounds)
    } catch (error) {
        return null
    }
}

// Match input password vs Hashed (db)
const hashMatch = async(loginPassword, hashedPassword) => {
    try {
        let match = await bcrypt.match(loginPassword, hashedPassword)
        return match
    } catch (error) {
        return false
    }
}

module.exports = {
    hashMatch, hashPassword
}