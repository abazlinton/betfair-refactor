var betfairBaseRequest = require('./betfair_requests');
var httpRequest = require('./http_request');

var betfairHandler = {};

betfairHandler.sendEvents = function(res) {
  var options = betfairBaseRequest.options;
  options.path = betfairBaseRequest.paths.events;

  options.callback = function(data) {
    res.send(JSON.parse(data.toString()));
  }

  httpRequest(options, JSON.stringify(betfairBaseRequest.body.events));
};

betfairHandler.sendMarketIdForMatchOdds = function(eventId, res) {
  var betfairMarketIdRequest = betfairBaseRequest.body.markets;
  betfairMarketIdRequest.filter.eventIds.push(eventId.toString());
  var options = betfairBaseRequest.options;
  options.path = betfairBaseRequest.paths.markets;

  options.callback = function(data) {
    res.send(JSON.parse(data.toString()));
  }

  httpRequest(options, JSON.stringify(betfairMarketIdRequest));
};

betfairHandler.sendBookForMarket = function(marketId, res) {
  var betfairMarketBookRequest = betfairBaseRequest.body.marketBook;
  betfairMarketBookRequest.marketIds.push(marketId.toString());
  var options = betfairBaseRequest.options;
  options.path = betfairBaseRequest.paths.marketBook;

  options.callback = function(data) {
    res.send(JSON.parse(data.toString()));
  }

  httpRequest(options, JSON.stringify(betfairMarketBookRequest));
};

module.exports = betfairHandler;
