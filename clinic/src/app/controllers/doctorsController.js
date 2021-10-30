const Doctor = require('../models/Employee');

class DoctorController {
  listDoctors(req, res, next) {
    Doctor.find({})
      .then((doctors) => {
        doctors.sort((d1, d2) => {
          if (d1.Name < d2.Name) {
            return -1;
          } else if (d1.Name === d2.Name) {
            return 0;
          } else {
            return 1;
          }
        })
        res.render('doctors', { doctors: doctors });
      })
      .catch(next);
  }

  showDoctor(req, res, next) {
    Doctor.findById(req.params.id)
        .then((doctor) => {
          console.log(doctor);
          res.render('doctor', { doctor: doctor });
        })
        .catch(next);
  }

  createDoctorForm(req, res, next) {
    res.render('create');
  }

  createDoctor(req, res, next) {
    const doctor = new Doctor(req.body);
    doctor
      .save()
      .then(() => res.redirect('/doctors/show'))
      .catch(next);
  }

  editDoctor(req, res, next) {
    Doctor.findById(req.params.id)
      .then((Employee) => {
        res.json(Employee)
        }
      )
      .catch(next);
  }

  updateDoctorForm(req, res, next) {
    console.log('UpdateDoctorForm');
    Doctor.findById(req.params.id)
      .then((doctor) => res.render('update', { doctor: doctor }))
      .catch(next);
  }

  updateDoctor(req, res, next) {
    console.log('UpdateDoctor');
    Doctor.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/doctors/show'))
      .catch(next);
  }

  deleteDoctor(req, res, next) {
    Doctor.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('/doctors/show'))
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

  search(req,res,next){
    const search = req.query.q;
    Doctor.find({Name: {$regex: search, $options: 'i'}})
      .then((doctors) => {
        res.render('doctors', { doctors: doctors });
      })
      .catch(next);
  }
}

module.exports = new DoctorController();
