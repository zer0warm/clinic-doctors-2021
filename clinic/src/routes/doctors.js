const express = require('express');
const router = express.Router();

const doctorsController = require('../app/controllers/doctorsController');

router.patch('/restore/:id', doctorsController.restoreDoctor);
router.delete('/delete/:id', doctorsController.deleteDoctor);
router.delete('/force-delete/:id', doctorsController.forceDeleteDoctor);
router.get('/edit/:id', doctorsController.editDoctor);
router.put('/update/:id', doctorsController.updateDoctor);
// router.get('/create', doctorsController.createDoctor);
router.post('/store', doctorsController.store);
router.get('/show', doctorsController.showDoctorsList);

module.exports = router;
