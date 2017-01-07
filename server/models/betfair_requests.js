var betfairCredentials = require('./betfair_credentials');

var betfairBaseRequest = {
  body: {}
};

betfairBaseRequest.body.events = {
  filter: {
    competitionIds: ["31"], //football
    // marketTypeCodes here prevents the non-match events appearing (e.g winner 2017 etc)
    marketTypeCodes: ['MATCH_ODDS']
  }
};

betfairBaseRequest.body.markets = {
  filter: {
    eventIds: [],
    marketTypeCodes: ['MATCH_ODDS']
  },
  maxResults: 1,
  // need marketProjection here to get the actual team names as don't get them at marketBook point!!
  marketProjection: ['RUNNER_DESCRIPTION']
};

betfairBaseRequest.body.marketBook = {
  marketIds: [],
  priceProjection: {
    priceData: ['EX_BEST_OFFERS'],
    exBestOfferOverRides: {
      bestPricesDepth: 1,
      rollupModel: 'STAKE',
      rollupLimit: 20
    },
    virtualise: false,
    rolloverStakes: false
  },
  orderProjection: 'ALL',
  matchProjection: 'ROLLED_UP_BY_PRICE'
};

var baseApiPath = "/exchange/betting/rest/v1.0/";

betfairBaseRequest.paths = {
  events: baseApiPath + "listEvents/",
  markets: baseApiPath + "listMarketCatalogue/",
  marketBook: baseApiPath + "listMarketBook/"
}

betfairBaseRequest.options = {
  hostname: "api.betfair.com",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Application': betfairCredentials.appKey,
    'X-Authentication': betfairCredentials.sessionToken
  },
  method: "POST" //Betfair don't follow REST properly
};

module.exports = betfairBaseRequest;
