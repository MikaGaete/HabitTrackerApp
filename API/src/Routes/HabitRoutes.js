const express = require('express');
const router = express.Router();
const HabitsController = require('../Controllers/HabitsController');

router.post('/create', HabitsController.createNewHabit);
router.get('/find/byId/:habitID', HabitsController.findHabitById);

module.exports = router;