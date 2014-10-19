#!/usr/bin/env node
var sandbox = require('../').create(),
    logger = require('../lib/logger');

var port = process.env.PORT || 3000;
sandbox.listen(port, function () {
  logger.info('started sandbox on port %d', port);
});