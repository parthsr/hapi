const server = require('./solution7.js');

describe('creates a server that responds with a template', () => {
  it('returns status code as 200', (done) => {
    const options = {
      method: 'GET',
      url: '/?name=Handling',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  it('returns file content for index.html', (done) => {
    const options = {
      method: 'GET',
      url: '/?name=Helping&suffix=!',
    };
    server.inject(options, (response) => {
      expect(response.result).toBe(`<html>
<head><title>Hello Helping!</title></head>
<body>
Hello Helping!
</body>
</html>
`);
      done();
    });
  });
  it('returns file content for index.html', (done) => {
    const options = {
      method: 'GET',
      url: '/?name=parth&suffix=.',
    };
    server.inject(options, (response) => {
      expect(response.result).toBe(`<html>
<head><title>Hello parth.</title></head>
<body>
Hello parth.
</body>
</html>
`);
      done();
    });
  });
});
