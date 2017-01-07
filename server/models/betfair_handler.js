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

betfairHandler.getMarketIdForMatchOdss = function(eventId, res) {
  var betfairMarketIdRequest = betfairBaseRequest.body.events;
  betfairMarketIdRequest.eventIds.push(eventId.toString());
  var options = betfairBaseRequest.options;
  options.path = betfairBaseRequest.paths.markets;
  options.callback = function(data) {
    res.send(JSON.parse(data.toString()));
  }
  httpRequest(options, JSON.stringify(betfairMarketIdRequest));
};

module.exports = betfairHandler;
