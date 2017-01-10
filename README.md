# betfair-refactor

This a project I am refactoring that was the result of a weekend assignment at CodeClan. The original code was somewhat messy as I had to invest a fair amount of time trying to get to grips with the API. And often rapid trial and error was preferential to writing the cleanest code. The API does not seem to be that well designed which creates quite a barrier. Some of the issues with it I have identified are -

- It uses HTTP methods in a strange way. Data is requested with a POST request and a filter supplied in the body. This should really be achieved with a GET request and params in the URL.

- It does not use HTTP response codes sensibly, returning a 400 error for a malformed request when the actual error is actually incorrect credentials.

- The API insists on a trailing slash on the resource e.g. "listMarketCatalogue/". This should not matter and I would have thought a prefernce for no slash would be better than requiring one.

- The API is not internally consistent. The "listMarketBook/" takes a filter in the body, but does not supply a filter object (filter:{}) as per the other resources I am using.
