const mysql = require('mysql');

const Connection = mysql.createPool({
    host: '192.168.100.45',
    user: 'root',
    password: 'password',
    database: 'HabitTrackerApp',
    multipleStatements: true
});

module.exports = {Connection};