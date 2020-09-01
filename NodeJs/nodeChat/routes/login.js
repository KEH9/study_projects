var User = require('models/user').User;
var HttpError = require('error').HttpError;
var AuthError = require('models/user').AuthError;
var async = require('async');

exports.get = function (req, res) {
    res.render('../template/login');
};

exports.post = function (req, res, next) {
    console.log("post");

    var username = req.body.username;
    var password = req.body.password;


    User.authorize(username, password, function (err, user) {
        if (err) {

            if (err instanceof AuthError) {
                return next(new HttpError(403, err.message));
            } else {
            return next(err);
            }
        }

        req.session.user = user._id;
        res.send({});

    });




    //async.waterfall([
    //        function (callback) {
    //            User.findOne({username: username}, callback);
    //        },
    //        function (user, callback) {
    //            if (user) {
    //                console.log("user");
    //
    //                if (user.checkPassword(password)) {
    //                    callback(null, user);
    //                    console.log("user checked");
    //
    //                } else {
    //                    console.log("wrong password");
    //
    //                    next(new HttpError(403, "Пароль неверен"))
    //                }
    //            } else {
    //                console.log("save");
    //                var user = new User({username: username, password: password});
    //                user.save(function (err) {
    //                    if (err) return next(err);
    //                    callback(null, user);
    //                });
    //            }
    //        }
    //    ], function (err, user) {
    //        if (err) return next(err);
    //        req.session.user = user._id;
    //        res.send({});
    //
    //    }
    //);

};