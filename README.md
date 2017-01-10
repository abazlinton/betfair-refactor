# betfair-refactor

- Node.js
- Express
- Betfair API

This a project I am refactoring that was the result of a weekend assignment at CodeClan. The original code was somewhat messy as I had to invest a fair amount of time trying to get to grips with the API. And rapid trial and error was preferential to writing the cleanest code. The API does not seem to be that well designed which itself creates a barrier. Some of the issues with it I have identified are -

- It uses HTTP methods in a strange way. Data is requested with a POST request and a filter supplied in the body. This should really be achieved with a GET request and params in the URL.

- It does not use HTTP response codes sensibly, returning a 400 error for a malformed request when the actual error is  incorrect credentials.

- The API insists on a trailing slash on the resource e.g. "listMarketCatalogue/". This should not matter and I would have thought a preference for no slash would be better than requiring one.

- The API is not internally consistent. The "listMarketBook/" takes a filter in the body, but does not supply the filter within an object (filter:{}) as per the other resources I am using.

This assignment was also intended as an exercise in running the API requests in the browser (via XMLHttpRequest). But as the Betfair API does not seem to support CORS I have had to actually make the requests in node. Then have the browser send requests to my express server rather than the API directly. This has had the side benefit of allowing me to restructure the resources so that the client can make more sensible requests that the Betfair API itself supports.
