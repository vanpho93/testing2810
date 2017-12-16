const mongoose = require('mongoose');
const User = require('../models/User');

const storySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, trim: true, require: true },
    content: { type: String, trim: true, require: true }
});

const StoryModel = mongoose.model('Story', storySchema);

class Story extends StoryModel {
    static async addStory(_id, title, content) {
        const story = new Story({ title, content, author: _id });
        await story.save();
        const updateObj = { $push: { stories: story._id } };
        const user = await User.findByIdAndUpdate(_id, updateObj);
        return story;
    }
}

module.exports = Story;
