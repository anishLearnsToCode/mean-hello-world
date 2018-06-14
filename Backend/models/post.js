const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  postTitle: {type: String, required: true},
  postContent: {type: String, required: true}
});

module.export = mongoose.model('Post', postSchema);
