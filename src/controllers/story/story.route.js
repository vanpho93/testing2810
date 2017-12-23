const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });
const Story = require('../../models/Story');
const requireLogIn = require('../user/requireLogIn.middleware');

const route = express.Router();

route.use(requireLogIn);

route.post('/', parser, (req, res) => {
    const { title, content } = req.body;
    Story.addStory(req.user._id, title, content)
    .then(story => res.send('Them story thanh cong.'))
    .catch(err => res.status(404).send(err))
});

module.exports = route;
