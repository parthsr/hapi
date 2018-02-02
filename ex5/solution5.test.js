// const http = require('http');
const server = require('./solution5');

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
  url: '/?name=handling',
};
const output =
`<html>
    <head><title>Hello handling</title></head>
    <body>
        Hello handling
    </body>
</html>`;
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
      expect(response.result).toBe(output);
      done();
    });
  });
});

