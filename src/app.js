const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/muave', (req, res) => {
    res.cookie('daMuaVe', true);
    res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
    if (req.cookies.daMuaVe !== 'true') return res.send('Ban phai mua ve');
    res.send('Moi xem phim');
});

module.exports = { app };
