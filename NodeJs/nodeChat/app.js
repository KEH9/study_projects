var express = require('express');
var http = require('http');
var path = require('path');
var config = require('../chat/config');
var log = require('libs/log')(module);
var mongoose = require('libs/mongoose');
var HttpError = require('error').HttpError;

console.log(config.get('port'));

var app = express();
app.set('port',config.get('port'));//

app.engine('ejs', require('ejs-locals'));
app.set('template', path.join(__dirname, './template'));
app.set('view engine', 'ejs');

app.use(express.favicon());
if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());

var MongoStore = require('node_modules/connect-mongo')(express);
var sessionStore = require('libs/sessionStore');

app.use(express.session({
  secret: config.get('session:secret'),
  session: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: sessionStore
}));

//app.use(function(req, res, next){
//  req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
//  res.send('Visits = ' + req.session.numberOfVisits);
//});

app.use(require('middleware/sendHttpError'));
app.use(require('middleware/loadUser'));

app.use(app.router);

require('routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next){
  if (typeof err == 'number') {
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
      express.errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});


var server = http.createServer(app);
server.listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));//config.get('port')
});

var io = require('./socket')(server);
app.set('io', io);