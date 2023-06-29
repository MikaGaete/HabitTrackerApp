const {PrismaClient} = require('@prisma/client');
const {UniqueIdentifierGenerator} = require("../Utilities/UniqueIdentifierGenerator");
const prisma= new PrismaClient();

const createNewHabit = async (req, res) => {
    const {associatedUser, name, icon, color, type, goal, goalUnit} = req.body;

    const assets = await new Promise(resolve => {
        fetch(`${process.env.API_IP}/assets/find/byIds/${icon}/${color}/${type}`)
            .then((response) => response.json())
            .then((data) => resolve(data));
    })

    const newHabit = await prisma.habit.create({
        data : {
            id: UniqueIdentifierGenerator(),
            name: name,
            goal: goal,
            goalUnit: goalUnit,
            ...assets,
            userID: associatedUser
        }
    });

    res.status(201).send(newHabit);
}

const findHabitById = async (req, res) => {
    const {habitID} = req.params;

    const desiredHabit = await prisma.habit.findUnique({
        where: {id: habitID}
    });

    const {iconID, colorID, typeID, ...habitData} = desiredHabit;

    const assets = await new Promise(resolve => {
        fetch(`${process.env.API_IP}/assets/find/byIds/${iconID}/${colorID}/${typeID}`)
            .then((response) => response.json())
            .then((data) => resolve(data));
    })

    const fullHabitData = {
        ...habitData,
        ...assets
    }

    res.status(200).send(fullHabitData);
}



module.exports = {
    createNewHabit,
    findHabitById
}