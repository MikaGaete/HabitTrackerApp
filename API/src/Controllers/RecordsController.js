const {PrismaClient} = require('@prisma/client');
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

module.exports = {createNewRecord}