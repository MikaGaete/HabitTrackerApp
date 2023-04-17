const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const authenticateToken = (req, res, next) => {
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);

        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
};

const generateAccessToken = (username) => {
    return jwt.sign({data: username}, process.env.TOKEN_SECRET, {expiresIn: '1h'});
}

module.exports = {
    authenticateToken,
    generateAccessToken
}