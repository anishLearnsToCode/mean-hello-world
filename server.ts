const http = require('http');

console.log('Hello');
const server = http.createServer((request, response) => {
  response.end('This is my first response, woohoo');
});

server.listen(process.env.PORT || 4000);
