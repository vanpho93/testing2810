const assert = require('assert');
const { compare } = require('bcrypt');
const User = require('../../src/models/User');
const Story = require('../../src/models/Story');

describe.only('Test update story', () => {
    let idStory;
    beforeEach('Create new user for test', async () => {
        const user = await User.signUp('a@gmail.com', '123', 'Pho', '08123781');
        const story = await Story.addStory(user._id, 'JS 123', 'javascript');
        idStory = story._id;
    });

    it('Can update story by static method', async () => {
        await Story.updateStory(idStory, 'JS 321', 'javascript');
        const updatedStory = await Story.findById(idStory);
        assert.equal(updatedStory.title, 'JS 321');
    });
});
