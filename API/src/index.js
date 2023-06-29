const express = require('express');
const Router = require('./Routes/Router');
require('dotenv').config();

const app = express();
const port = 2506;

app.use(express.json());
app.use("/api", Router);

app.listen(port, () => console.log(`listening on port ${port}!`));