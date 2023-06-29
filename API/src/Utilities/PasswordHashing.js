const {createHash} = require('crypto');

const PasswordHashing = (modifiedPwd) => {
    return createHash('sha256').update(modifiedPwd).digest('hex');
}

module.exports = {PasswordHashing};