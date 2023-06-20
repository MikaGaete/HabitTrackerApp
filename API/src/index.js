const express = require('express');
const UserRoutes = require('./Routes/UserRoutes');

const app = express();
const port = 2506;

app.use(express.json());
app.use("/api/users", UserRoutes);

app.listen(port, () => console.log(`listening on port ${port}!`));