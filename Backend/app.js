"use strict";

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoDbUserName = 'anish';
const mongoDbUserPassword = 'q0oDoGuQ1EQrb2jM';
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://' + mongoDbUserName + ':' + mongoDbUserPassword + '@mean-first-mongo-domoi.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Connected To The DataBase');
  })
  .catch(() => {
    console.log('Connection Failed');
  });

const PostModel = require('./models/post');

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS");
  next();
});

app.use(bodyParser.json()); // This method can be used, if we add the body-parser npm library
// app.use(express.json());      // This method can be used directly after adding express, no need of body-parser library (Better)
app.use(bodyParser.urlencoded({extended: false}));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.post('/api/posts', (request, response, next) => {
  const newPost = new PostModel({
    postTitle: request.body.postTitle,
    postContent: request.body.postContent
  });
  newPost.save();
  response.status(201).json({
    postTitle: request.body.postTitle,
    postContent: request.body.postContent
  });
});

app.get('/api/posts', (request, response, next) => {
  const posts = [
    {postId: 'fabjkbh455', postTitle: 'Server Post', postContent: 'Server Content'},
    {postId: 'vhv565565', postTitle: 'Server Post dummy title', postContent: 'Dummy Content'},
    {postId: 2344, postTitle: 'Woohoo', postContent: 'amazing!!'},
    {postId: 2344, postTitle: 'Woohoo', postContent: 'amazing!!'}
  ];
  const idealPosts = [
    {_id: '67989', postTitle: 'title', postContent: 'post content'},
    {_id: '676fgf', postTitle: 'This is title', postContent: 'This is da content'}
  ];
  PostModel.find().then(documents => {
    response.status(200).json({
      message: 'Posts fetched successfully',
      posts: documents.map(post => {
        return {
          postTitle: post.postTitle,
          postContent: post.postContent,
          postID: post._id
        }
      })
    })
  });
  // response.status(200).json({
  //   message: 'Posts Fetched Successfully',
  //   posts: posts
  // });
});

app.delete('api/posts/:postID', (request, response, next) => {
  console.log(request.params.postID);
  response.status(200).json({
    message: 'Post has been deleted'
  });
});

module.exports = app;
