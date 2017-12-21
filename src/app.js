const express = require('express');
const cookieParser = require('cookie-parser');
const parser = require('body-parser').urlencoded({ extended: false });
require('./db');
const User = require('./models/User');
const { sign, verify } = require('./jwt');

const app = express();
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => res.send('123'));

// app.post('/cong', parser, (req, res) => {
//     const { soA, soB } = req.body;
//     if (isNaN(soA) || isNaN(soB)) return res.status(400).send('Fail');
//     res.send(+soA + +soB + '');
// });

const requireLogIn = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.redirect('/signin');
    verify(token)
    .then(obj => {
        if (!obj.email) return res.redirect('/signin');
        req.user = obj;
        next();
    })
    .catch(err => res.redirect('/signin'));
}

const redirectIfLoggedIn = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return next();
    verify(token)
    .then(obj => {
        if (!obj.email) return next();
        res.redirect('/profile');
    })
    .catch(err => res.next());
}

app.get('/profile', requireLogIn, (req, res) => {
    res.render('profile', { user: req.user });
});

app.get('/signin', redirectIfLoggedIn, (req, res) => res.render('signin'));
app.get('/signup', redirectIfLoggedIn, (req, res) => res.render('signup'));

app.post('/signin', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(user => {
        const { name, phone, email } = user;
        return sign({ name, phone, email })
    })
    .then(token => res.cookie('token', token).send('Dang nhap thanh cong'))
    .catch(err => res.status(400).send(err.message));
});

app.post('/signup', parser, (req, res) => {
    const { email, name, password, phone } = req.body;
    User.signUp(email, password, name, phone)
    .then(() => res.send('Dang ky thanh cong'))
    .catch(() => res.status(400).send('Email da ton tai'));
});

module.exports = { app };

