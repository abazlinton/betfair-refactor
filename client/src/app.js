window.onload = function() {

  var testButton = document.createElement('button');
  testButton.innerText = "Get Events";
  testButton.onclick = getEvents();
  var body = document.getElementById('body');
  body.appendChild(testButton);

}

var getEvents = function(){
  return function(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3001/events");
    request.onload = function(){
    if (request.status === 200) {
          var jsonString = request.responseText;
          // var tableData = JSON.parse(jsonString);
          var output = document.createElement('div');
          output.innerText = jsonString;
          body.appendChild(output);
          };
    };
  console.log(request);
  request.send();
  }.bind(this);
}
