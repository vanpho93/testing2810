const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/muave', (req, res) => {
    res.cookie('userId', '1234');
    res.send('Ban da mua ve');
});

module.exports = { app };
