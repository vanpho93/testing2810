const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, trim: true, require: true },
    content: { type: String, trim: true, require: true }
});

const StoryModel = mongoose.model('Story', storySchema);

class Story extends StoryModel {}

module.exports = Story;
