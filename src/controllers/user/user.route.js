const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });
const redirectIfLoggedIn = require('./redirectIfLoggedIn.middleware');
const requireLogIn = require('./requireLogIn.middleware');

const router = express.Router()

router.get('/profile', requireLogIn, require('./profile.controller'));

router.use(redirectIfLoggedIn);
router.get('/signin', (req, res) => res.render('signin'));
router.get('/signup', (req, res) => res.render('signup'));
router.post('/signin', parser, require('./signIn.controller'));
router.post('/signup', parser, require('./signUp.controller'));

module.exports = router;
