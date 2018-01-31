const http = require('http');
// const solution = require('./solution');

const promise = new Promise((resolve) => {
  http.get('http://localhost:8080/', (res) => {
    res.on('data', (chunk) => {
      data = chunk.toString();
      resolve(data);
    });
  });
});
describe('checking the use case by using http.get', () => {
  it('checking if the value that is recieved is right', () => promise.then(value => expect(value).toBe('hi this is parth')));
});
