const {PrismaClient} = require('@prisma/client');
const prisma= new PrismaClient();

const createNewNotification = async (req, res) => {
    const {habitID, day, time, icon, message} = req.body;

    const assets = await new Promise(resolve => {
        fetch(`${process.env.API_IP}/assets/find/forNotifications/byNames/${icon}/${day}`)
            .then((response) => response.json())
            .then((data) => resolve(data));
    });

    const newNotification = await prisma.notification.create({
        data: {
            habitID: habitID,
            time: time,
            message: message,
            ...assets
        }
    });

    res.status(201).send(newNotification);
}

module.exports = {createNewNotification}