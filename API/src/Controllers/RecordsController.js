const {PrismaClient} = require('@prisma/client');
const {p} = require("prisma/build/public/assets/vendor");
const prisma= new PrismaClient();

const createNewRecord = async (req, res) => {
    const {habitID, date, progress, progressUnit} = req.body;

    const newRecord = await prisma.record.create({
        data: {
            habitID: habitID,
            date: new Date(date),
            progress: progress,
            progressUnit: progressUnit,
        }
    });

    res.status(201).send(newRecord);
}

const updateOneHabitById = async (req, res) => {
    const {habitID, progress} = req.body;

    const updatedHabit = await prisma.habit.update({
        where: {
            id: habitID
        },
        data: {
            progress: progress
        }
    });

    res.status(200).send(updatedHabit);
}

module.exports = {
    createNewRecord,
    updateOneHabitById
}