const express = require('express');
const router = express.Router();
const UsersController = require('../Controllers/UsersController');

router.post('/new', UsersController.createNewUser);
router.post('/get/email', UsersController.findOneByEmail);
router.post('/get/id', UsersController.findOneById);
router.put('/update', UsersController.findOneAndUpdate);

module.exports = router;