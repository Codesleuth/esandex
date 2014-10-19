var winston = require('winston');

winston.cli();

var logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    })
  ],
  levels: {
    info: 2,
    Esandex: 3
  },
  colors: {
    Esandex: 'magenta'
  }
});

var logLevel = 'info';

module.exports.setLevel = function (level) {
  logLevel = level;
};

module.exports.info = function (message) {
  if (logLevel === 'info' || logLevel === 'debug') {
    var args = _args = Array.prototype.slice.call(arguments);
    args.splice(0, 1);
    logger.log.apply(logger, ['Esandex', message.info].concat(args));
  }
};

module.exports.error = function () {
  if (logLevel === 'info' || logLevel === 'debug') {
    var args = Array.prototype.slice.call(arguments);
    logger.log.apply(logger, ['Esandex'].concat(args));
  }
};

module.exports.warn = function () {
  if (logLevel === 'info' || logLevel === 'debug') {
    var args = Array.prototype.slice.call(arguments);
    logger.log.apply(logger, ['Esandex'].concat(args));
  }
};

module.exports.debug = function () {
  if (logLevel === 'debug') {
    var args = Array.prototype.slice.call(arguments);
    logger.debug.apply(logger, ['Esandex'].concat(args));
  }
};