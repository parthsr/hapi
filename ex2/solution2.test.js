const http = require('http');

const promise = new Promise((resolve) => {
  http.get('http://localhost:3000/parth', (res) => {
    res.on('data', (chunk) => {
      resolve(chunk.toString());
    });
  });
});

describe('tessting the use case first', () => {
  it('this is test case 1 for checking what is being returned', () => promise.then((value) => { expect(value).toBe('Hello parth'); }));
  it('this is test case 1 for checking what is being returned', () => promise.then((value) => { expect(value).not.toBe('Hello partsddh'); }));
});
