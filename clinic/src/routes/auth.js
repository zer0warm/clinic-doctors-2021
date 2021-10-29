const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/authController');
// var sessionChecker = (req, res, next) => {
//     if (req.session.cookie && req.body.rememberme) {
//       res.redirect("/doctors/show");
//     } else {
//       next();
//     }
//   };
router.get('/', authController.signinForm);
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;
