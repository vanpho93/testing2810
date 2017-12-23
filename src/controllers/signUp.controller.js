const User = require('../models/User');

module.exports = (req, res) => {
    const { email, name, password, phone } = req.body;
    User.signUp(email, password, name, phone)
    .then(() => res.send('Dang ky thanh cong'))
    .catch(err => {
        if (err.code) return res.status(400).send('Email da ton tai');
        res.status(400).send('Loi input');
    });
};
