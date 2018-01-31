const hapi = require('hapi');

let server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000,
});

const handle = (request, reply) => {
  reply('hi this is parth');
};
server.route({ path: '/', method: 'GET', handler: handle });
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
