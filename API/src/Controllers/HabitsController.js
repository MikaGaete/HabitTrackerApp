const {Connection} = require("../Credentials/Credentials");

const createNewHabit = (req, res) => {
    const {associatedUser, name, icon, color, type, goal, goalUnit} = req.body;

    const getIcon = `(select id from icons where name = ?)`;
    const getColor = `(select id from colors where name = ?)`;
    const getType = `(select id from types where name = ?)`;
    const values = `(uuid(), ?, ?, ${getIcon}, ${getColor}, ${getType}, ?, ?)`
    const query = `insert into habits (id, associatedUser, name, icon, color, type, goal, goalUnit) values ${values};`;

    Connection.query(query, [associatedUser, name, icon, color, type, goal, goalUnit], (result, error) => {
        if (error) {
            res.status(404).send(error);
        }
        else res.status(200).send(result);
    });
}

const findOneById = (req, res) => {
    const {id, associatedUser} = req.body;

    const query = "select * from habits where id = ? and associatedUser = ?;";

    Connection.query(query, [id, associatedUser], (result, error) => {
        if (error) {
            res.status(404).send(error);
        }
        else res.status(200).send(result);
    })
}

const findAllByUser = (req, res) => {
    const {associatedUser} = req.body;

    const query = "select * from habits where associatedUser = ?;";

    Connection.query(query, [associatedUser], (result, error) => {
        if (error) {
            res.status(404).send(error);
        }
        else res.status(200).send(result);
    });
}

const findAllByType = (req, res) => {
    const {type, associatedUser} = req.body;

    const query = "select from habits where type = (select id from types where name = ?) and associatedUser = ?;";

    Connection.query(query, [type, associatedUser], (result, error) => {
        if (error) {
            res.status(404).send(error);
        }
        else res.status(200).send(result);
    })
}

module.exports = {
    createNewHabit,
    findOneById,
    findAllByUser,
    findAllByType,
}