const assert = require('assert');
const request = require('supertest');
const { app } = require('../../src/app');
const User = require('../../src/models/User');
const { compare } = require('bcrypt');

describe('Test POST sign up ', () => {
    it('Can sign up by post /signup', async () => {
        const body = {
            email: 'vanpho01@gmail.com',
            password: '123',
            name: 'abcd',
            phone: '01823812'
        };
        const response = await request(app)
        .post('/signup')
        .type('form')
        .send(body);
        assert.equal(response.text, 'Dang ky thanh cong');
        assert.equal(response.status, 200);
        const user = await User.findOne({ email: 'vanpho01@gmail.com' });
        assert.equal(user.name, 'abcd');
        const same = await compare('123', user.password);
        assert.equal(same, true);
    });

    it ('Cannot sign up with duplicated email', async () => {
        await User.signUp('a123@gmail.com', '123', 'Teo', '09876543');
        const body = {
            email: 'a123@gmail.com',
            password: '123',
            name: 'Ti',
            phone: '01823812'
        };
        const response = await request(app)
        .post('/signup')
        .type('form')
        .send(body);
        assert.equal(response.status, 400);
        assert.equal(response.text, 'Email da ton tai');
    });
});
