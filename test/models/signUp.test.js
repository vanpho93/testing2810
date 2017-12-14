const assert = require('assert');
const { compare } = require('bcrypt');
const User = require('../../src/models/User');

describe.only('Test sign up', () => {
    it('Can sign up with full info', async () => {
        await User.signUp('a@gmail.com', '123', 'abcd', '018231');
        const user = await User.findOne({ email: 'a@gmail.com' });
        assert.equal(user.name, 'abcd');
        const same = await compare('123', user.password);
        assert.equal(same, true);
    });

    it('Cannot sign up with duplicated email', async () => {
        await User.signUp('a@gmail.com', '123', 'abcd', '018231');
        
    });
});
