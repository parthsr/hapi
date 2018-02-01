const http = require('http');

const promise = new Promise((resolve) => {
  http.get('http://localhost:8080/', (res) => {
    res.on('data', (chunk) => {
      const data = chunk.toString();
      resolve(data);
    });
  });
});
const f =
`<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
`;

describe('checking the use case by using http.get', () => {
  it('checking if the value that is recieved is right', () => promise.then(value => expect(value).toBe(f)));
});
