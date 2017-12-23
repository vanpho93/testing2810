const { sign, verify } = require('../jwt');

module.exports = (req, res, next) => {
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
