const doctorRouter = require('./doctors');
const listRouter = require('./list');
const authRouter = require('./auth');


function route(app) {
  app.use('/list', listRouter);
  app.use('/doctors', doctorRouter);
  app.use('/auth', authRouter);
}
module.exports = route;
