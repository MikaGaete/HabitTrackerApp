const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auth = require('./Helpers/jwt');
const unless = require('express-unless');
const users = require('./Controllers/usersController');
const errors = require('./Helpers/errorHandler');

auth.authenticateToken.unless = unless;
app.use(() => auth.authenticateToken.unless({
    path: [
        {
            url: '/users/login', methods: ['POST']
        },
        {
            url: '/users/register', methods: ['POST']
        }
    ]
}))

app.use(express.json);
app.use('/users', users);
app.use(errors.errorHandler);

const uri = "mongodb+srv://MikasLaptop:n3fkvrXyg2ruDQOl@appdb.vahgmrc.mongodb.net/Users?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'Connection error'));
DB.once('open', () => console.log(`Connected to mongo at ${uri}`));

app.listen(3100);