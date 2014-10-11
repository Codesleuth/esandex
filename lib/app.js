var express = require('express'),
    path = require('path'),
    osprey = require('osprey'),
    morgan = require('morgan');

module.exports.create = function () {
  var app = express();

  app.use(morgan('dev'));

  osprey.create('/v1.0', app, {
    ramlFile: path.join(__dirname, '../assets/esendex-v1_0.raml'),
    enableMocks: true,
    enableConsole: true,
    enableValidation: true,
    logLevel: 'info'
  });

  return app;
};