"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-Width, Content-Type, Accept");
  response.setHeader("Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS");
  next();
});

app.post('/api/posts', (request, response, next) => {
  console.log();
});

app.use('/api/posts', (request, response, next) => {
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
