const express = require('express');
const cookieParser = require('cookie-parser');
const user = require('./controllers/user.route');

const app = express();
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => res.send('123'));

app.use('/user', user);
require('./db');

module.exports = { app };
