const mongoose = require('mongoose');
const User = require('../models/User');

const storySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, trim: true, require: true },
    content: { type: String, trim: true, require: true }
});

const StoryModel = mongoose.model('Story', storySchema);

class Story extends StoryModel {
    static async addStory(idUser, title, content) {
        const story = new Story({ title, content, author: idUser });
        await story.save();
        const updateObj = { $push: { stories: story._id } };
        const user = await User.findByIdAndUpdate(idUser, updateObj);
        return story;
    }

    static async updateStory(_id, title, content) {
        return Story.findByIdAndUpdate(_id, { title, content });
    }
}

module.exports = Story;
