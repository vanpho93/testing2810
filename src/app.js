const express = require('express');
const cookieParser = require('cookie-parser');
const user = require('./controllers/user/user.route');
const story = require('./controllers/story/story.route');

const app = express();
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => res.send('123'));

app.use('/user', user);
app.use('/story', story);
require('./db');

module.exports = { app };
