const doctorRouter = require('./doctors');
const listRouter = require('./list');
const authRouter = require('./auth');


function route(app) {
  app.use('/', authRouter);
  app.use('/list', listRouter);
  app.use('/doctors', doctorRouter);
}
module.exports = route;
