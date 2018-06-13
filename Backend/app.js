const express = require('express');
const app = express();

app.use('/api/posts', (request, response, next) => {
  const posts = [
    {id: 'fabjkbh455', title: 'Server Post', content: 'Server Content'},
    {id: 'vhv565565', title: 'Server Post dummy', content: 'Dummy Content'}
  ];
  response.status(200).json({
    message: 'Posts Fetched Successfully',
    posts: posts
  });
});

module.exports = app;
