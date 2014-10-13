var express = require('express'),
    path = require('path'),
    osprey = require('osprey'),
    xmlparser = require('express-xml-bodyparser'),
    morgan = require('morgan');

module.exports.create = function () {
  var app = express();

  app.use(xmlparser());
  app.use(morgan('dev'));

  osprey.create('/v1.0', app, {
    ramlFile: path.join(__dirname, '../assets/esendex-v1_0.raml'),
    enableMocks: true,
    enableValidations: true,
    enableConsole: false,
    logLevel: 'info'
  });

  return app;
};