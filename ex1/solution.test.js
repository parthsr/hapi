const http = require('http');
// const solution = require('./solution');

const promise = new Promise((resolve) => {
  http.get('http://localhost:3000/', (res) => {
    res.on('data', (chunk) => {
      data = chunk.toString();
      resolve(data);
    });
  });
});
describe('checking the use case by using http.get', () => {
  it('checking if the value that is recieved is right', () => promise.then(value => expect(value).toBe('Hello hapi')));
  it('checking if the value that is recieved is right', () => promise.then(value => expect(value).not.toBe('hi this is not parth')));
});
