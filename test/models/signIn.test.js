const assert = require('assert');
const { compare } = require('bcrypt');
const User = require('../../src/models/User');

describe('Test sign in', () => {
    beforeEach('Create new user for test', async () => {
        await User.signUp('a@gmail.com', '123', 'Pho', '08123781');
    });

    it('Can sign in with right info', async() => {
        await User.signIn('a@gmail.com', '123');
    });

    it('Cannot sign in with wrong email', async() => {
        try {
            await User.signIn('a1@gmail.com', '123');
            throw new Error('Test fail');
        } catch (err) {
            assert.equal(err.message, 'User khong ton tai');
        }
    });

    it('Can sign in with wrong email password', async() => {
        try {
            await User.signIn('a@gmail.com', '1234');
            throw new Error('Test fail');
        } catch (err) {
            assert.equal(err.message, 'Mat khau khong hop le');
        }
    });
});
