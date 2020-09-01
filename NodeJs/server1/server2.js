var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function(req, res) {

    switch (req.url) {
        case '/':
            sendfile("index.html", res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            break;

        case '/publish':
            var body = "";

            req
                .on('readable', function () {
                    body += req.read();

                    if (body.length > 1e4) {
                        res.statusCode = 413;
                        res.end("Your message is too big for my little chat");
                    }
                })

                .on('end', function (){
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end("Bad Request");
                        return;
                    }
                    chat.publish(body.message);
                    res.end('ok');
                });

            break;

        default:
            res.statusCode = 404;
            res.end("Not Found");
    }
}).listen(3000);

function sendfile (filename, res) {
    var fileStream = fs.createReadStream(filename);
    fileStream.on('error', function () {
        res.statusCode = 500;
        res.end("Server Error");
    });

    fileStream.on('readable', function () {

        var data = fileStream.read();
        if (data != null) {
            res.write(data);
        }

    })

}
