const Doctor = require('../models/Employee');

class ListController {
  storedDoctors(req, res, next) {
    Doctor.find({})
      .then((Employee) =>
        res.json(Employee)
      )
      .catch(next);
  }
  trashDoctors(req, res, next) {
    Doctor.findDeleted({})
      .then((Employee) =>
        res.json(Employee)
      )
      .catch(next);
  }
}

module.exports = new ListController();
