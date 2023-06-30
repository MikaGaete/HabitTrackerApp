const RecordsController = require('../Controllers/RecordsController');
const express = require('express');
const router = express.Router();

router.post('/create', RecordsController.createNewRecord);
router.put('/update/progress/ById', RecordsController.updateOneHabitById);

module.exports = router;