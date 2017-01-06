var express = require('express');
var app = express();
var path = require('path');
var httpRequest = require('./models/http_request');
var betfairHandler = require('./models/betfair_handler');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

app.get('/events', function(req, res) {
  betfairHandler.sendEvents(res);
});

app.get('/events/:eventId/matchOdds', function(req, res) {
  betfairHandler.sendMatchOddsForEvent(req.params.eventId, res);
});

app.listen(3001, function () {
  var host = this.address().address;
  var port = this.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
