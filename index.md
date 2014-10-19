---
layout: default
---

**Esandex**
===========
<span id="summary">*A lightweight API sandbox for the [Esendex][esendex] REST API.*</span>

## View the API Documentation

*Note: The documentation is still in progress.*

### Version 1.0
|               |                                           |
| ------------- | ----------------------------------------- |
| RAML          | [Esendex REST API v1.0 RAML][v1.0-raml]   |
| Documentation | [Auto-generated Documentation][v1.0-docs] |
| Status        | Incomplete                                |

## Run a Sandbox
First install from NPM:

```bash
$ npm install esandex -g
```

Then start an instance of the Esandex server:

```bash
$ esandex
Esandex: started sandbox on port 3000
```

You can now navigate to various endpoints in the sandbox, such as [http://localhost:3000/v1.0/accounts](http://localhost:3000/v1.0/accounts).

## As a Package
The sandbox can be started from within your code by consuming it as a package. Firstly install into your project:

```bash
$ npm install esandex --save
```

Start the sandbox by creating it and instructing it to listen on the specified port:

```js
var sandbox = require('esandex').create();

sandbox.listen(3000, function () {
  console.log('sandbox started at http://localhost:3000/');
});
```

## Contribute
Contributions are welcome! Fork the project [over on GitHub](https://github.com/codesleuth/esandex "Esandex") and create a pull request!

[esendex]: https://www.esendex.com
[rest-api-docs]: http://developers.esendex.com/APIs/REST-API
[v1.0-raml]: https://raw.githubusercontent.com/Codesleuth/esandex/master/raml/v1.0/api.raml
[v1.0-docs]: {{ site.baseurl }}/v1.0/api.html