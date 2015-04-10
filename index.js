var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/slack', function(request, response) {

  // var messageText = request.body.text; // the original message text
  // var triggerWord = request.body.trigger_word; // the word that triggered this hook;

  response.json({
    text: 'Hello Slack!'
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
