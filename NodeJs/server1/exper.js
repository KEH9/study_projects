var http = require('http');
var static = require('node-static');
var fileServer = new static.Server('.');
var path = require('path');
var fs = require('fs');

var uploads = {};

function onUpload(req, res) {

    var fileId = req.headers['x-file-id'];
    var startByte = req.headers['x-start-byte'];

    if (!fileId) {
        res.writeHead(400, "No file id");
        res.end();
    }

    // ����� ����� ���������� "� ������"
    var filePath = '/dev/null';
    // ����� �������� ���� � � �������� �����
    // var filePath = path.join('/tmp', fileId);

    console.log("onUpload fileId: ", fileId);

    // ������������� ����� ��������
    if (!uploads[fileId]) uploads[fileId] = {};
    var upload = uploads[fileId];

    console.log("bytesReceived:" + upload.bytesReceived + " startByte:" + startByte)

    // ���� ���� 0, �� ������� ����� ����, ����� ��������� ������ � ��������
    if (startByte == 0) {
        upload.bytesReceived = 0;
        var fileStream = fs.createWriteStream(filePath, {
            flags: 'w'
        });
        console.log("New file created: " + filePath);
    } else {
        if (upload.bytesReceived != startByte) {
            res.writeHead(400, "Wrong start byte");
            res.end(upload.bytesReceived);
            return;
        }
        // ��������� � ������������ ����
        fileStream = fs.createWriteStream(filePath, {
            flags: 'a'
        });
        console.log("File reopened: " + filePath);
    }


    req.on('data', function(data) {
        upload.bytesReceived += data.length;
    });

    // ��������� ���� ������� � ����
    req.pipe(fileStream);

    // � ����� -- ������� end
    fileStream.on('close', function() {
        if (upload.bytesReceived == req.headers['x-file-size']) {
            // ��������� ���������
            console.log("File finished");
            delete uploads[fileId];

            // ��� ������������� - ���������� ����������� �������� �����

            res.end("Success " + upload.bytesReceived);
        } else {
            // ���������� ��������, ���������� �������� �� ���� ���������
            console.log("File unfinished, stopped at " + upload.bytesReceived);
            res.end();
        }
    });

    // ��� ������� - ���������� �������
    fileStream.on('error', function(err) {
        console.log("fileStream error");
        res.writeHead(500, "File error");
        res.end();
    });

}

function onStatus(req, res) {
    var fileId = req.headers['x-file-id'];
    var upload = uploads[fileId];
    console.log("onStatus fileId:", fileId, " upload:", upload);
    if (!upload) {
        res.end("0")
    } else {
        res.end(String(upload.bytesReceived));
    }
}


function accept(req, res) {
    if (req.url == '/status') {
        onStatus(req, res);
    } else if (req.url == '/upload' && req.method == 'POST') {
        onUpload(req, res);
    } else {
        fileServer.serve(req, res);
    }

}




// -----------------------------------

if (!module.parent) {
    http.createServer(accept).listen(8080);
    console.log('������ ������� �� ����� 8080');
} else {
    exports.accept = accept;
}