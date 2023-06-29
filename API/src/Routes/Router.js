const express = require('express');
const router = express.Router();
const UserRoutes = require('../Routes/UserRoutes');
const HabitRoutes = require('../Routes/HabitRoutes');

router.use('/users', UserRoutes);
router.use('/habits', HabitRoutes);

module.exports = router;