// const http = require('http');
const server = require('./direct');

// const promise = new Promise((resolve) => {
//   http.get('http://localhost:8080/foo/bar/baz/index.html', (res) => {
//     res.on('data', (chunk) => {
//       data = chunk.toString();
//       resolve(data);
//     });
//   });
// });

const option = {
  method: 'GET',
  url: '/foo/bar/baz/index.html',
};
const f =
`<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>
`;

describe('checking the use case by using http.get', () => {
  // it('checking if the value that is recieved is right', () => promise.then(value => expect(value).toBe(f)));
  it('checking using injection', (done) => {
    server.inject(option, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  it('checking using injection result', (done) => {
    server.inject(option, (response) => {
      expect(response.result).toBe(f);
      done();
    });
  });
});

