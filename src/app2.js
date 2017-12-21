const express = require('express');
const cookieParser = require('cookie-parser');
const { sign, verify } = require('./jwt');

const app = express();
app.use(cookieParser());

app.get('/muave', (req, res) => {
    sign({ daMuaVe: true })
    .then(token => {
        res.cookie('token', token);
        res.send('Ban da mua ve');
    })
    .catch(err => res.send(err));
});

app.get('/vaorap', (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send('Ban phai mua ve');
    verify(token)
    .then(obj => {
        if (!obj.daMuaVe) return res.send('Ban phai mua ve');
        res.send('Moi xem phim');
    })
    .catch(err => res.send('Ban phai mua ve'));
});

module.exports = { app };
