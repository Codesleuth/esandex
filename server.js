var sandbox = require('./').create();

var port = process.env.PORT || 3000;
sandbox.listen(port, function () {
  console.log('Esendex Sandbox listening on port ' + port);
});