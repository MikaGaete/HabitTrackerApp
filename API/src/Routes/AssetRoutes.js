const AssetsController = require('../Controllers/AssetsController');
const express = require('express');
const router = express.Router();

router.get('/find/forHabits/byIds/:iconID/:colorID/:typeID', AssetsController.findAssetsForHabitsByIds);
router.get('/find/forHabits/byNames/:iconName/:colorName/:typeName', AssetsController.findAssetsForHabitsByNames);
router.get('/find/forNotifications/byIds/:iconID/:dayID', AssetsController.findAssetsForNotificationsByIds);
router.get('/find/forNotifications/byNames/:iconName/:dayName', AssetsController.findAssetsForNotificationsByNames);

module.exports = router;