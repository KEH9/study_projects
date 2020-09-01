//http://127.0.0.1/echo?message=Hello -> Hello

var http = require('http');
var fs = require('fs');
//var debug = require('debug')('server');
var url = require('url');
var path = require('path');

var ROOT = __dirname + "/public";

http.createServer(function (req, res) {
    if (!checkAccess(req)) {
        res.statusCode = 403;
        res.end('Tell me the secret to access');
        return;
    }

    sendFileSafe(url.parse(req.url, true).pathname, res);

}).listen(3000);

function checkAccess (req) {
    return url.parse(req.url, true).query.secret == 'zzz';
}

function sendFileSafe (filePath, res) {

    try {
        filePath = decodeURIComponent(filePath);
    } catch (e) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }

    if (~filePath.indexOf('\0')) {
        res.statusCode = 400;
        res.end('Bad Request');
        return;
    }

    filePath = path.normalize(path.join(ROOT, filePath));

    if (filePath.indexOf(ROOT) != 0) {
        res.statusCode = 404;
        res.end('File Not Found');
        return;
    }

    sendFile(filePath, res);
}

function sendFile (filePath, res) {

    fs.readFile(filePath, function (err, content){
        if (err) throw err;

        var mime = require('mime').lookup(filePath);
        res.setHeader('Content-Type', mime + "; charset=utf-8");
        res.end(content);

    });
}

















//http.createServer(function (req, res) {
//    var info;
//
//    if (req.url == '/') {
//        info = fs.readFile('index_.html', function (err, info) {
//            res.end(info);
//
//        });
//    }
//}).listen(3000);
//


//var server = new http.Server();
//
//
//server.on('request', require('./request'));
//
//server.listen(1338, '127.0.0.1');
//
//debug('ok computer');