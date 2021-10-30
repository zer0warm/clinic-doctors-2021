const doctorRouter = require('./doctors');
const authRouter = require('./auth');
const dashboardRouter = require('./dashboard');
const authMiddle = require('../app/middlewares/middleware');

function route(app) {
  app.use('/', authRouter);
  app.use('/dashboard', dashboardRouter);
  app.use('/doctors', authMiddle.authRequired, doctorRouter);
  app.all(function(req, res) {
    res.render('404', {});
  });
}

module.exports = route;
