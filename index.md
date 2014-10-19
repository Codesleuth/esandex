Esandex
=======
*A lightweight API sandbox for the [Esendex][esendex] REST API.*

## API Documentation
| Version | Status     | Documentation              |
|---------|------------|----------------------------|
| v1.0    | Incomplete | [/v1.0/api.html][api-v1.0] |

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
## As a Package
The sandbox can be started from within your code by consuming it as a package. Firstly install into your project:
```bash
$ npm install esandex --save
```
Start the sandbox by creating it and instructing it to listen on the specified port:
```js
var sandbox = require('esandex').create();

sandbox.listen(3000, function () {
  console.log('sandbox started at http://localhost:3000.');
});
```
## Contribute
Contributions are welcome! Fork the project [over on GitHub](https://github.com/codesleuth/esandex "Esandex") and create a pull request!

[esendex]: https://www.esendex.com
[api-v1.0]: /v1.0/api.html