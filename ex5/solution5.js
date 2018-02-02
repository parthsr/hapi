const Vision = require('vision');
const hapi = require('hapi');
const handlebar = require('handlebars');
const path = require('path');

const server = new hapi.Server();
server.register(Vision, (err) => {
  if (err) throw err;
});
server.connection({
  host: 'localhost',
  // port: Number(process.argv[2] || 8080),
  port: 8080,
});
server.views({
  engines: {
    html: handlebar,
  },
  path: path.join(__dirname, 'templates'),
});
server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});

server.start(() => {
  console.log('Server created at:', server.info.uri);
});

module.exports = server;
