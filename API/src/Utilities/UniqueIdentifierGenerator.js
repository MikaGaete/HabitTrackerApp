const {v4} = require('uuid');

const UniqueIdentifierGenerator = () => {
    return v4();
}

module.exports = {UniqueIdentifierGenerator};