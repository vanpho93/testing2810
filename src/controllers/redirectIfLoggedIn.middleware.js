const { verify } = require('../jwt');

module.exports = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return next();
    verify(token)
    .then(obj => {
        if (!obj.email) return next();
        res.redirect('/profile');
    })
    .catch(err => res.next());
};
