const express = require('express');
const router = express.Router();
const UserRoutes = require('../Routes/UserRoutes');
const HabitRoutes = require('../Routes/HabitRoutes');
const AssetRoutes = require('./AssetRoutes');
const NotificationRoutes = require('./NotificationRoutes');
const RecordRoutes = require('./RecordRoutes');

router.use('/users', UserRoutes);
router.use('/habits', HabitRoutes);
router.use('/assets', AssetRoutes);
router.use('/notifications', NotificationRoutes);
router.use('/records', RecordRoutes);

module.exports = router;