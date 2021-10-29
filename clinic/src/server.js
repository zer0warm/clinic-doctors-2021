const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const route = require('./routes');
const app = express();
const database = require('./config/db');
const port = 7000;
const dotenv = require('dotenv')
const cookie = require('cookie-parser');
// const session = require('express-session');

dotenv.config();
database.connect();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(cookie())
// app.use(session({
//   key: "token",
//   secret: 'clinic2021@',
//   resave: true, 
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }))

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'pug');

route(app);
app.listen(port, () => console.log(`Server is running on ${port}`));
