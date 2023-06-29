const {PrismaClient} = require('@prisma/client');
const {StringGenerator} = require("../Utilities/StringGenerator");
const {PasswordHashing} = require("../Utilities/PasswordHashing");
const {UniqueIdentifierGenerator} = require("../Utilities/UniqueIdentifierGenerator");
const prisma= new PrismaClient();

const createNewUser = async (req, res) => {
    const {name, email, password} = req.body;
    const string = StringGenerator();
    const newPwd = password + string;
    const hashedPwd = PasswordHashing(newPwd);

    const newUser = await prisma.user.create({
        data: {
            id: UniqueIdentifierGenerator(),
            name: name,
            email: email,
            password: hashedPwd,
            pwdString: string
        }
    });

    res.status(201).send(newUser);
}

const logInUser = async (req, res) => {
    const {email, password} = req.body;

    const {pwdString} = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    const hashedPwd = PasswordHashing(password + pwdString);

    const UserData = await prisma.user.findFirst({
        where: {
            email: email,
            password: hashedPwd
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    });

    res.status(200).send(UserData);
}

module.exports = {
    createNewUser,
    logInUser
};