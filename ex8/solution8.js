const hapi = require('hapi');
const fs = require('fs');
const rot = require('rot13-transform');
const path = require('path');

const server = new hapi.Server();
server.connection({
  host: 'localhost',
  // port: Number(process.argv[2] || 4000),
  port: 4000,
});
const handle = (request, reply) => {
  const read = fs.createReadStream(path.join(__dirname, './file.txt'));
  reply(read.pipe(rot()));
};
server.route({ path: '/', method: 'GET', handler: handle });

// server.start((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Server running at: ${server.info.uri}`);
// });
module.exports = server;
