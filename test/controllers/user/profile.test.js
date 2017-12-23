const assert = require('assert');
const { compare } = require('bcrypt');
const request = require('supertest');

const { app } = require('../../../src/app');
const User = require('../../../src/models/User');

describe('Test POST sign in ', () => {
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

    it('Can enter /profile with token', async () => {
        const response = await request(app)
        .get('/user/profile')
        .set('Cookie', token);
        assert.equal(response.status, 200);
    });

    it('Cannot enter /profile without token', async () => {
        const response = await request(app)
        .get('/user/profile');
        assert.equal(response.status, 302);
    });
});
