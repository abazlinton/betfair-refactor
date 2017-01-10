# betfair-refactor

This a project I am refactoring that was the result of a weekend assignment at CodeClan. The original code was somewhat messy as I had to invest a fair amount of time trying to get to grips with the API. And often rapid trial and error was preferential to writing the cleanest code. The API does not seem to be that well designed which creates quite a barrier. Some of the issues with it I had identified are -

- It uses HTTP methods in a strange way. Data is requested with a POST requests and a filter supplied in the body. This should really be achieved with a GET request and params in the URL.

- It does not use HTTP response codes sensibly, returning a 400 error for a malformed request when the actual error is actually incorrect credentials.

- The API insists on a trailing slash on the resource, e.g. "
