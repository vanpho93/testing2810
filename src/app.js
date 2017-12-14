const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });

const User = require('./models/User');
const app = express();

app.get('/', (req, res) => res.send('123'));

app.post('/cong', parser, (req, res) => {
    const { soA, soB } = req.body;
    if (isNaN(soA) || isNaN(soB)) return res.status(400).send('Fail');
    res.send(+soA + +soB + '');
});

app.post('/signin', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(() => res.send('Dang nhap thanh cong'))
    .catch(err => res.status(400).send(err.message));
});

app.post('/signup', parser, (req, res) => {
    const { email, name, password, phone } = req.body;
    User.signUp(email, password, name, phone)
    .then(() => res.send('Dang ky thanh cong'))
    .catch(() => res.status(400).send('Email da ton tai'));
});

module.exports = { app };
