const {Connection} = require("../Credentials/Credentials");

const loginUser = (req, res) => {
    const {email, password} = req.body;

    const query = "";
}

const createNewUser = (req, res) => {
    const {name, email, password} = req.body;

    const query = "insert into users (name, email, password, string) values (?, ?, sha2(?, 256), ?);";

    Connection.query(query, [name, email, password], (result, error) => {
        if (error) {
            res.status(400).send(error);
        }
        else res.status(200).send(JSON.stringify(result));
    });
}

const findOneByEmail = (req, res) => {
    const {email} = req.body;

    const query = "select id, name, email from users where email = ?;";

    Connection.query(query, [email], (result, error) => {
        if (error) {
            res.status(404).send(error);
        }
        else res.status(202).send(result);
    });
}

const findOneById = (req, res) => {
    const {id} = req.body;

    const query = "select id, name, email from users where id = ?;";

    Connection.query(query, [id], (result, error) => {
        if (error) {
            res.status(404).send(error);
        }
        else res.status(202).send(result);
    });
}

const findOneAndUpdate = (req, res) => {
    const {id, parameters} = req.body;
    const keys = Object.keys(parameters);
    let query = 'update users set ';
    const values = [];

    for (let i = 0; i < keys.length; i++) {
        query += `${keys[i]} = ?`;
        values.push(parameters[keys[i]]);

        if (i + 1 < keys.length) {
            query += ", ";
        }
    }

    values.push(id);
    query += ` where id = ?;`;

    Connection.query(query, values, (result, error) => {
        if (error) {
            res.status(404).send(error);
        }
        else res.status(201).send(result);
    });
}

module.exports = {
    createNewUser,
    findOneByEmail,
    findOneById,
    findOneAndUpdate
}