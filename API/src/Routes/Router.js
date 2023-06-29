const express = require('express');
const router = express.Router();
const UserRoutes = require('../Routes/UserRoutes');
const HabitRoutes = require('../Routes/HabitRoutes');
const AssetRoutes = require('../Routes/AssetsRoutes');

router.use('/users', UserRoutes);
router.use('/habits', HabitRoutes);
router.use('/assets', AssetRoutes);

module.exports = router;