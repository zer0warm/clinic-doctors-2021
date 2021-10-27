const express = require('express');
const router = express.Router();

const listController = require('../app/controllers/ListController');

router.get('/trash/doctors', listController.trashDoctors);
router.get('/stored/doctors', listController.storedDoctors);

module.exports = router;
