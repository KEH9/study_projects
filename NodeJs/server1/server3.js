var http = require('http');

var argv = require('optimist').argv;

var lala = 3;
console.log(lala);
console.log(process.env.HOME);

http.createServer(function (req, res) {
    res.end('This server is running!!!');

}).listen(argv.port);