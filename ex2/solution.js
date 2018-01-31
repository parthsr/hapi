const hapi = require('hapi');

const server = new hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000,
});
const handle = (request, reply) => {
  reply(`Hello ${request.params.name}`);
};
server.route({ path: '/{name}', method: 'GET', handler: handle });

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
