Esandex
=======

***[View the project page.][project-page]***

A lightweight sandbox implementation of the [Esendex][esendex] REST API, providing request and response schema validation with example response behaviour and content. Currently all examples are taken from the [official REST API documentation][esendex-rest-api], with the goal of eventually adding sandboxed features that modify these example responses for expected scenarios.

## Getting Started
You can consume the sandbox in one of two ways: as a standalone server or as a package.

### Standalone Server
Install the sandbox globally:

```bash
$ npm install esandex -g
```

Start the sandbox:

```bash
$ esandex
Esandex: started sandbox on port 3000
```

### Use In Code
To consume the sandbox as a package, `require` the module and start the server:

```js
var esandex = require('esandex');

var sandbox = esandex.create();
sandbox.listen(3000, function () {
  console.log('sandbox started at http://localhost:3000/');
}
```

[project-page]: http://www.codesleuth.co.uk/esandex/
[esendex]: http://www.esendex.com
[esendex-rest-api]: http://developers.esendex.com/APIs/REST-API