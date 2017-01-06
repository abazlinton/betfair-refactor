var baseApiPath = "/exchange/betting/rest/v1.0/"
var betfairBaseRequest = require('./betfair_requests')

var betfairHandler = {
  hostname: "api.betfair.com",
  eventsPath: baseApiPath + "listEvents/",
  marketsPath: baseApiPath + "listMarketCatalogue/",
  marketBookPath: baseApiPath + "listMarketBook/"

};

betfairHandler.sendEvents = function(res) {
  res.send("Here are your events!");
};

betfairHandler.sendMatchOddsForEvent = function(eventId, res) {
  var responseText = "Here are the match odds for event " + eventId;
  res.send(responseText);
};

module.exports = betfairHandler;
