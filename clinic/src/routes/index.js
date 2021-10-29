const doctorRouter = require('./doctors');
const listRouter = require('./list');
const authRouter = require('./auth');
const authMiddle = require('../app/middlewares/middleware');
function route(app) {
  app.use('/', authRouter);
  app.use('/list', listRouter);
  app.use('/doctors', authMiddle.authRequired, doctorRouter);
}
module.exports = route;
