const inert = require('inert');
const hapi = require('hapi');

const server = new hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000,
});
server.register(inert, (err) => {
  if (err) throw err;
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: 'index.html',
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
