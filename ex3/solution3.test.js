// const http = require('http');
const server = require('./solution3');

const option = {
  method: 'GET',
  url: '/',
};
// const promise = new Promise((resolve) => {
//   http.get('http://localhost:3000/', (res) => {
//     res.on('data', (chunk) => {
//       const data = chunk.toString();
//       resolve(data);
//     });
//   });
// });
const f =
`<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handlingd
    </body>
</html>
`;

describe('checking the use case by using http.get', () => {
  // it('checking if the value that is recieved is right', () =>
  // promise.then(value => expect(value).toBe(f)));
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
