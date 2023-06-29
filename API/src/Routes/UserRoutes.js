const UsersController = require('../Controllers/UsersController');
const express = require('express');
const router = express.Router();

router.post('/create', UsersController.createNewUser);
router.post('/logIn', UsersController.logInUser);

module.exports = router;