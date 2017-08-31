'use strict';

const server = require('./server/server');

const port = process.env.port || process.env.PORT || 3000;

server.listen(port);
