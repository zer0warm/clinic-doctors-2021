const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/authController');

router.get('/', authController.signinForm);
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;
