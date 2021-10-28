const Doctor = require('../models/Employee');

class DoctorController {
  showDoctorsList(req, res, next) {
    Doctor.find({})
      .then((doctors) => {
        res.render('doctors', { doctors: doctors });
      })
      .catch(next);
  }
  
  // createDoctor(req, res, next) {
  //   console.log(req.body);
  //   res.render('doctors/create');
  // }

  store(req, res, next) {
    const doctor = new Doctor(req.body);
    doctor
      .save()
      .then(() => res.json(doctor))
      .catch(next)

      res.send('New doctor saved')
  }

  editDoctor(req, res, next) {
    Doctor.findById(req.params.id)
      .then((Employee) => {
        res.json(Employee)
        }
      )
      .catch(next);
  }

  updateDoctor(req, res, next) {
    Doctor.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.json(Doctor))
      .catch(next); 
  }

  deleteDoctor(req, res, next) {
    Doctor.delete({ _id: req.params.id })
      .then(() => res.send('Deleted Successfully'))
      .catch(next);
  }

  forceDeleteDoctor(req, res, next) {
    Doctor.deleteOne({ _id: req.params.id })
      .then(() => res.send('Force Deleted Successfully'))
      .catch(next);
  }

  restoreDoctor(req, res, next) {
    Doctor.restore({ _id: req.params.id })
      .then(() => res.send('Restored successfully'))
      .catch(next);
  }
}

module.exports = new DoctorController();
