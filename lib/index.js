var express = require('express'),
    path = require('path'),
    osprey = require('osprey'),
    xmlparser = require('express-xml-bodyparser'),
    morgan = require('morgan');

module.exports.create = function () {
  var app = express();

  app.use(morgan('dev'));
  app.use(xmlparser());

  osprey.create('/v1.0', app, {
    ramlFile: path.join(__dirname, '../raml/v1.0/api.raml'),
    enableMocks: true,
    enableValidations: true,
    enableConsole: false,
    logLevel: 'error'
  });

  return app;
};