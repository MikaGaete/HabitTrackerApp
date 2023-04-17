const User = require('../Modals/usersModal');
const bcrypt = require('bcryptjs');
const auth = require('../Helpers/jwt');

const login = async ({username, password}) => {
    const user = await User.findOne({username});

    if (bcrypt.compareSync(password, user.password)) {
        const token = auth.generateAccessToken(username);
        return {...user.toJSON(), token}
    }
}

const register = async (params) => {
    const user = new User(params);
    await user.save;
}

const getById = async (id) => {
    const user = await User.findById(id);
    return user.toJSON();
}

module.exports = {
    login,
    register,
    getById
}