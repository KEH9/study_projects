var util = require('util');

var str = util.format('My %s %d %j', 'string', '...', {test: 'obj'});

console.log(str);