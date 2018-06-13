const express = require('express');
const app = express();

app.use((request, response, next) => {
  console.log('First Middleware');
  // next();
});

app.use((request, response, next) => {
  // console.log('Second middleware');
  response.send('Hello from express');
});

module.exports = app;
