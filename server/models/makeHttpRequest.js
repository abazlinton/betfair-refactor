var https = require('https');

var makeHttpRequest = function(reqOptions) {
  var options = {};
  options.hostname = reqOptions.hostname;
  options.path = reqOptions.path;
  options.headers = reqOptions.headers;
  options.method = reqOptions.method;
  var callback = reqOptions.callback;
  var req = https.request(options, function(res) {
    res.on('data', function(data) {
      console.log(data.toString());
    });
  });
  req.on('error', function(e){
    console.log(e);
  });
  req.end();
}

module.exports = makeHttpRequest;
