const express = require('express');
const router = express.Router();
const HabitsController = require('../Controllers/HabitsController');

router.post('/new', HabitsController.createNewHabit);
router.post('/get/id', HabitsController.findOneById);
router.get('/get')

module.exports = router;