const assert = require('assert');
const { compare } = require('bcrypt');
const User = require('../../src/models/User');

describe.only('Test sign in', () => {
    beforeEach('Create new user for test', async () => {
        await User.signUp('a@gmail.com', 'Pho', '08123781');
    });

    it('Can sign in with right info', async() => {

    });

    it('Cannot sign in with wrong email', async() => {
        
    });

    it('Can sign in with wrong email password', async() => {
        
    });
});
