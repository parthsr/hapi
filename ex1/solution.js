const hapi = require('hapi');

let server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

const handle = (request, reply) => {
  reply('Hello hapi');
};
server.route({ path: '/', method: 'GET', handler: handle });
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
