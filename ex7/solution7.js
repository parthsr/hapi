const Hapi = require('hapi');
const Vision = require('vision');
const Path = require('path');
const Handlebars = require('handlebars');

const server = new Hapi.Server();
server.register(Vision, (err) => {
  if (err) throw err;
});
server.connection({
  host: 'localhost',
  // port: Number(process.argv[2] || 8080),
  port: Number(8080),
});
server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});
server.views({
  engines: {
    html: Handlebars,
  },
  path: Path.join(__dirname, 'templates'),
  helpersPath: Path.join(__dirname, 'helpers'),
});
server.start(() => console.log('server started'));
module.exports = server;
