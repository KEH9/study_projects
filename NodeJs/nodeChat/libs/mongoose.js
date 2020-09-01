var mongoose = require('mongoose');
//var config = require('../config/config.json');
var config = require('../../chat/config');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;