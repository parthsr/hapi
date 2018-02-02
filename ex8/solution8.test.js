// const http = require('http');
const server = require('./solution8');

const option = {
  method: 'GET',
  url: '/',
};
const output = 'Gur Chefhvg bs Uncv-arff';

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

