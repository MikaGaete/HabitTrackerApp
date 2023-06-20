const mysql = require('mysql');

const Connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'HabitTrackerApp',
    multipleStatements: true
});

module.exports = {Connection};