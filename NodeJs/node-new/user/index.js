
var db = require('../db');
var log = require('../logger')(module);


function User (name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") + ', ' + who.name);
};

console.log('index.js was required!');

module.exports = User;

//console.log(module);
