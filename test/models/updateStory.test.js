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
        // const user2 = await User.findById(_id).populate('stories');
        const story2 = await Story.findById(story._id).populate('author');
        // console.log(user2);
    });
});
