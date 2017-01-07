var betfairBaseRequest = require('./betfair_requests');
var httpRequest = require('./http_request');
var betfairCredentials = require('./betfair_credentials');

var baseApiPath = "/exchange/betting/rest/v1.0/";

var betfairHandler = {
  hostname: "api.betfair.com",
  eventsPath: baseApiPath + "listEvents/",
  marketsPath: baseApiPath + "listMarketCatalogue/",
  marketBookPath: baseApiPath + "listMarketBook/",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Application': betfairCredentials.appKey,
    'X-Authentication': betfairCredentials.sessionToken
  }
};

betfairHandler.sendEvents = function(res) {
  var options = {
    hostname: betfairHandler.hostname,
    path: betfairHandler.eventsPath,
    method: "POST", //Betfair don't follow REST properly
    headers: betfairHandler.headers,
    callback: function(data){
      res.send(JSON.parse(data.toString()));
    }
  }
  httpRequest(options, JSON.stringify(betfairBaseRequest.events));
};

betfairHandler.sendMatchOddsForEvent = function(eventId, res) {
  var responseText = "Here are the match odds for event " + eventId;
  res.send(responseText);
};

module.exports = betfairHandler;
