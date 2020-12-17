const bcrypt = require('bcryptjs')

function hashPassword(password){
    let salt = bcrypt.genSaltSync(4)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

function compare(password, hash){
    let isValid = bcrypt.compareSync(password, hash)
    return isValid
}

module.exports = {hashPassword, compare}