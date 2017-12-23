const assert = require('assert');
const { compare } = require('bcrypt');
const request = require('supertest');

const { app } = require('../../../src/app');
const User = require('../../../src/models/User');

describe('Test POST sign in ', () => {
    beforeEach('Sign up a user for test', async () => {
        await User.signUp('a123@gmail.com', '123', 'Teo', '09876543');
    });

    it('Can sign in with right info', async () => {
        const body = {
            email: 'a123@gmail.com',
            password: '123'
        };
        const response = await request(app)
        .post('/user/signin')
        .type('form')
        .send(body);
        assert.equal(response.status, 200);
        assert.equal(response.text, 'Dang nhap thanh cong');
    });

    it('Cannot sign in with wrong email', async () => {
        const body = {
            email: 'a1234@gmail.com',
            password: '123'
        };
        const response = await request(app)
        .post('/user/signin')
        .type('form')
        .send(body);
        assert.equal(response.status, 400);
        assert.equal(response.text, 'User khong ton tai');
    });

    it('Cannot sign in with wrong password', async () => {
        const body = {
            email: 'a123@gmail.com',
            password: '1234'
        };
        const response = await request(app)
        .post('/user/signin')
        .type('form')
        .send(body);
        assert.equal(response.status, 400);
        assert.equal(response.text, 'Mat khau khong hop le');
    });
});
