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

app.get('/events/:eventId/markets', function(req, res) {
  betfairHandler.sendMarketIdForMatchOdds(req.params.eventId, res);
});

app.get('/markets/:marketId/book', function(req, res) {
  betfairHandler.sendBookForMarket(req.params.marketId, res);
});

app.listen(3001, function () {
  var host = this.address().address;
  var port = this.address().port;
  console.log('Betfair app listening at http://%s:%s', host, port);
});
