var log = require('libs/log')(module);
var config = require('../../chat/config');
var connect = require('connect'); // npm i connect
var async = require('async');
var cookie = require('cookie');   // npm i cookie
var sessionStore = require('libs/sessionStore');
var HttpError = require('error').HttpError;
var User = require('models/user').User;
var express = require('express');



function loadSession(sid, callback) {
    console.log('loadSession!!!!!!!!!!');

    // sessionStore callback is not quite async-style!
    sessionStore.load(sid, function(err, session) {
        if (arguments.length == 0) {
            // no arguments => no session
            return callback(null, null);
        } else {
            return callback(null, session);
        }
    });

}

function loadUser(session, callback) {

    if (!session.user) {
        log.debug("Session %s is anonymous", session.id);
        return callback(null, null);
    }

    log.debug("retrieving user ", session.user);

    User.findById(session.user, function(err, user) {
        if (err) return callback(err);

        if (!user) {
            return callback(null, null);
        }
        log.debug("user findbyId result: " + user);
        callback(null, user);
    });

}

module.exports = function(server) {
    var io = require('socket.io').listen(server);
    io.set('origins', 'localhost:*');
//    io.set('logger', log);

//    var handshake = io.handshake;
    io.set('authorization', function(handshake, callback) {
        async.waterfall([
            function(callback) {
                // сделать handshakeData.cookies - объектом с cookie
                handshake.cookies = cookie.parse(handshake.headers.cookie || '');

                console.log(handshake);
                //console.log('handshake.cookies  = ' + handshake.cookies );
                //console.log('config.get(session:key)  = ' + config.get('session:key'));
                //console.log('config.get(session:secret)  = ' + config.get('session:secret'));

                var sidCookie = handshake.cookies[config.get('session:key')];
                console.log('sidCookie = ' + sidCookie);
                console.log('connect = ' + connect);
                console.log('connect.utils = ' + connect.utils);


                var parsedCookie = cookie.parse(handshake.headers.cookie);
                var cookieParser = require('cookie-parser');
                var sid = cookieParser.signedCookie(parsedCookie['connect.sid'], config.get('session:secret'));



                //var sid = connect.utils.parseSignedCookie(sidCookie, config.get('session:secret'));







                //var secret = config.get('session:secret');
                //var sessionKey = config.get('session:key');
                //console.log(handshake.signedCookies); // undefined
                //var cookieParser = express.cookieParser(secret);
                //cookieParser(handshake, {}, function (err) {
                //    if (err) return callback(err);
                //
                //    console.log('handshake.signedCookies = ' + handshake.signedCookies);
                //
                //    var sid = handshake.signedCookies[sessionKey]; // y handshake появилось поле 'signedCookies'
                //    console.log('sid2 = ' + sid);
                //
                //});


                console.log('sid = ' + sid);

                loadSession(sid, callback);
            },
            function(session, callback) {
console.log('session = ' + session);
                if (!session) {

                    console.log('No session');
                    callback(new HttpError(401, "No session"));
                }

                handshake.session = session;
                loadUser(session, callback);
            },
            function(user, callback) {
                if (!user) {
                    console.log('Anonymous session may not connect');
                    callback(new HttpError(403, "Anonymous session may not connect"));
                }

                handshake.user = user;
                callback(null);
            }

        ], function(err) {
            if (!err) {
                return callback(null, true);
            }

            if (err instanceof HttpError) {
                return callback(null, false);
            }

            callback(err);
        });

    });

    io.sockets.on('session:reload', function(sid) {
        var clients = io.sockets.clients();

        clients.forEach(function(client) {
            if (client.handshake.session.id != sid) return;

            loadSession(sid, function(err, session) {
                if (err) {
                    console.log('server error');
                    client.emit("error", "server error");
                    client.disconnect();
                    return;
                }

                if (!session) {
                    console.log('logout');
                    client.emit("logout");
                    client.disconnect();
                    return;
                }

                client.handshake.session = session;
            });

        });

    });

    io.sockets.on('connection', function(socket) {

        var username = socket.handshake.user.get('username');

        socket.broadcast.emit('join', username);
        console.log('join');

        socket.on('message', function(text, cb) {
            socket.broadcast.emit('message', username, text);
            cb && cb();
        });

        socket.on('disconnect', function() {
            console.log('leave');
            socket.broadcast.emit('leave', username);
        });

    });

    return io;
};