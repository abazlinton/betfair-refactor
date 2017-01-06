var express = require('express');
var app = express();
var path = require('path');
var makeHttpRequest = require('./models/makeHttpRequest');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
  makeHttpRequest({hostname: "www.google.co.uk", method: "GET", callback: function(){
    console.log("got some data");
    }
  });


});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
