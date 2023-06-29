const AssetsController = require('../Controllers/AssetsController');
const express = require('express');
const router = express.Router();

router.get('/find/byIds/:iconID/:colorID/:typeID', AssetsController.findAssetsByIds);
router.get('/find/byNames/:iconName/:colorName/:typeName', AssetsController.findAssetsByNames);

module.exports = router;