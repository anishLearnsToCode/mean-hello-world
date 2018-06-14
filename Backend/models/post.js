const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  postTitle: {type: String, required: true},
  postContent: {type: String}
});

module.exports = mongoose.model('PostModel', postSchema);
