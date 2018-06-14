"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PostModel = require('./models/post');

const mongoDbUserName = 'anish';
const mongoDbUserPassword = 'q0oDoGuQ1EQrb2jM';

app.use(bodyParser.json()); // This method can be used, if we add the body-parser npm library
// app.use(express.json());      // This method can be used directly after adding express, no need of body-parser library (Better)
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  response.setHeader("Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS");
  next();
});

app.post('/api/posts', (request, response, next) => {
  const post = request.body;
  const newPost = new PostModel({
    postTitle: 'random',
    postContent: 'random'
  });
  console.log(post);
  response.status(201).json({
    message: 'Post Added Successfully'
  });
});

app.get('/api/posts', (request, response, next) => {
  const posts = [
    {postId: 'fabjkbh455', postTitle: 'Server Post', postContent: 'Server Content'},
    {postId: 'vhv565565', postTitle: 'Server Post dummy title', postContent: 'Dummy Content'},
    {postId: 2344, postTitle: 'Woohoo', postContent: 'amazing!!'},
    {postId: 2344, postTitle: 'Woohoo', postContent: 'amazing!!'}
  ];
  response.status(200).json({
    message: 'Posts Fetched Successfully',
    posts: posts
  });
});

module.exports = app;
