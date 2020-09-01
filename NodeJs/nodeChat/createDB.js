var path = require('path');
var mongoose = require('../chat/libs/mongoose');
//mongoose.set('debug', true);
var async = require('async');

async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers
], function (err, result) {
    console.log(arguments);
    mongoose.disconnect();
    }
);



function open (callback) {
    mongoose.connection.on('open', callback);
}


function dropDatabase (callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}


function requireModels (callback) {
    require(path.join(__dirname, 'models','user.js'));

    var User;

    User = require(path.join(__dirname, 'models','user.js')).User;
    User.on('index', callback);
}


function createUsers (callback) {


    var users = [
        {username: "Вася", password: "supervasya"},
        {username: "Петя", password: "123"},
        {username: "admin", password: "thetruehero"}
    ];

    async.each(users, function (userData, callback) {
        var user = new mongoose.models.User(userData);
        user.save(callback);
    }, callback);
}