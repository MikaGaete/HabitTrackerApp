const {PrismaClient} = require('@prisma/client');
const prisma= new PrismaClient();

const findAssetsByIds = async (req, res) => {
    const {iconID, colorID, typeID} = req.params;

    const iconName = await prisma.icon.findUnique({
        where: {id: Number(iconID)},
        select: {name: true}
    });
    const colorName = await prisma.color.findUnique({
        where: {id: Number(colorID)},
        select: {name: true}
    });
    const typeName = await prisma.type.findUnique({
        where: {id: Number(typeID)},
        select: {name: true},
    });

    const assets = {
        iconName: iconName.name,
        colorName: colorName.name,
        typeName: typeName.name
    }

    res.status(200).send(assets);
}

const findAssetsByNames = async (req, res) => {
    const {iconName, colorName, typeName} = req.params;

    const iconID = await prisma.icon.findUnique({
        where: {name: iconName},
        select: {id: true}
    });
    const colorID = await prisma.color.findUnique({
        where: {name: colorName},
        select: {id: true}
    });
    const typeID = await prisma.type.findUnique({
        where: {name: typeName},
        select: {name: true},
    });

    const assets = {
        iconID: iconID.id,
        colorID: colorID.id,
        typeID: typeID.id
    }

    res.status(200).send(assets);
}

module.exports = {
    findAssetsByIds,
    findAssetsByNames
}