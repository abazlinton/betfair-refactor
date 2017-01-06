function BetfairHandler(){}

BetfairHandler.sendEvents = function(res) {
  res.send("Here are your events!");
};

BetfairHandler.sendMatchOddsForEvent = function(eventId, res) {
  var responseText = "Here are the match odds for event " + eventId;
  res.send(responseText);
};

module.exports = BetfairHandler;
