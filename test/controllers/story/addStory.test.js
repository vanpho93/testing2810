const assert = require('assert');
const { compare } = require('bcrypt');
const request = require('supertest');

const { app } = require('../../../src/app');
const User = require('../../../src/models/User');

describe.only('Test POST /story', () => {
    let token;
    beforeEach('Sign up a user for test', async () => {
        await User.signUp('a123@gmail.com', '123', 'Teo', '09876543');
        const body = {
            email: 'a123@gmail.com',
            password: '123'
        };
        const response = await request(app)
        .post('/user/signin')
        .type('form')
        .send(body);
        token = response.headers['set-cookie'];
    });

    it('Can add new story by post /profile with token', async () => {
        const response = await request(app)
        .post('/story')
        .type('form')
        .send({ title: 'JS', content: 'Javascript' })
        .set('Cookie', token);
        assert.equal(response.status, 200);
        const user = await User.findOne({}).populate('stories');
        assert.equal(user.stories[0].title, 'JS');
    });
});
