const http = require('http');

http.get('http://localhost:3000', (res) => {
  res.on('data', (chunk) => {
    data = chunk.toString();
    console.log(data);
  });
});
