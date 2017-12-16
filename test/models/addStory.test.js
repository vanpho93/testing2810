const assert = require('assert');
const { compare } = require('bcrypt');
const User = require('../../src/models/User');
const Story = require('../../src/models/Story');

describe('Test add story', () => {
    let _id;
    beforeEach('Create new user for test', async () => {
        const user = await User.signUp('a@gmail.com', '123', 'Pho', '08123781');
        _id = user._id;
    });

    it('Can add new story for user', async () => {
        const story = new Story({
            title: 'JS',
            content: 'Javascript 123',
            author: _id
        });
        await story.save();
        const updateObj = { $push: { stories: story._id } };
        const user = await User.findByIdAndUpdate(_id, updateObj);
        const user2 = await User.findById(_id).populate('stories');
        const story2 = await Story.findById(story._id).populate('author');
        assert.equal(user2.stories[0].title, 'JS');
        assert.equal(story2.author.email, 'a@gmail.com');
    });

    it('Can add new story by static addStory function', async () => {
        const story = await Story.addStory(_id, 'JS', 'Javascript 123');
        const user2 = await User.findById(_id).populate('stories');
        const story2 = await Story.findById(story._id).populate('author');
        assert.equal(user2.stories[0].title, 'JS');
        assert.equal(story2.author.email, 'a@gmail.com');
    });
});
