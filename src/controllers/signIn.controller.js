const { sign } = require('../jwt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(user => {
        const { name, phone, email } = user;
        return sign({ name, phone, email })
    })
    .then(token => res.cookie('token', token).send('Dang nhap thanh cong'))
    .catch(err => res.status(400).send(err.message));
};
