const NotificationsController = require('../Controllers/NotificationsController');
const express = require('express');
const router = express.Router();

router.post('/create', NotificationsController.createNewNotification);

module.exports = router;