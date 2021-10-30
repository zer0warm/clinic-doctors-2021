const User = require('../models/User');

class Dashboard {
    dashboard(req, res, next) {
        User.findOne()
            .then(user => {
                if (user) {
                    res.render('dashboard', { user: user });
                }
            })
    }
}

module.exports = new Dashboard();