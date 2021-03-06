const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require('./models/post');

const app = express();


const mongoDbUserName = 'anish';
const mongoDbUserPassword = 'q0oDoGuQ1EQrb2jM';
mongoose.connect('mongodb+srv://' + mongoDbUserName + ':' + mongoDbUserPassword + '@mean-first-mongo-domoi.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Connected To The DataBase');
  })
  .catch(() => {
    console.log('Connection Failed');
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


// API Calls
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    postTitle: req.body.postTitle,
    postContent: req.body.postContent
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postID: createdPost._id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  console.log('Inside GET api/posts');
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents.map((post) => {
        return {
          postTitle: post.postTitle,
          postContent:post.postContent,
          postID: post._id
        }
      })
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  console.log('DELETE method in api/posts');
  Post.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({
      deleted: result.ok == 1
    });
  });
});

module.exports = app;
