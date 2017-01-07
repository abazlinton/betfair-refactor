var betfairBaseRequest = {}

betfairBaseRequest.events = {
  filter: {
    competitionIds: ["31"], //football
    // marketTypeCodes here prevents the non-match events appearing (e.g winner 2017 etc)
    marketTypeCodes: ['MATCH_ODDS']
  }
};

betfairBaseRequest.markets = {
  filter: {
    eventIds: [],
    marketTypeCodes: ['MATCH_ODDS']
  },
  maxResults: 1,
  // need marketProjection here to get the actual team names as don't get them at marketBook point!!
  marketProjection: ['RUNNER_DESCRIPTION']
};

betfairBaseRequest.marketBook = {
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

module.exports = betfairBaseRequest;
