const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });
const app = express();

app.get('/', (req, res) => res.send('123'));

app.post('/cong', parser, (req, res) => {
    const { soA, soB } = req.body;
    if (isNaN(soA) || isNaN(soB)) return res.status(400).send('Fail');
    res.send(+soA + +soB + '');
});

module.exports = { app };
