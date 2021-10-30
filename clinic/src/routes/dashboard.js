const express = require('express');
const router = express.Router();
const dashboardController = require('../app/controllers/dashboardController');

router.get('/', dashboardController.dashboard);

module.exports = router;