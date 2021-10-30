const express = require('express');
const router = express.Router();
const doctorsController = require('../app/controllers/doctorsController');

router.patch('/restore/:id', doctorsController.restoreDoctor);
router.post('/delete/:id', doctorsController.deleteDoctor);
router.delete('/force-delete/:id', doctorsController.forceDeleteDoctor);
router.get('/edit/:id', doctorsController.editDoctor);
router.get('/update/:id', doctorsController.updateDoctorForm);
router.post('/update/:id', doctorsController.updateDoctor);
router.get('/create', doctorsController.createDoctorForm);
router.post('/create', doctorsController.createDoctor);
router.get('/show', doctorsController.listDoctors);
router.get('/show/:id', doctorsController.showDoctor);
router.get('/search', doctorsController.search);

module.exports = router;
