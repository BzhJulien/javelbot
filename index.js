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

  var triggerWord = request.body.trigger_word; // the word that triggered this hook;

  if(triggerWord == "teub"){
  
	response.json({
		text: 'ce n\'est pas un animal'
	});
  }
  
  if(triggerWord == "cat"){
  
	response.json({
		text: 'miaou'
	});
  }
  
  if(triggerWord == "dog"){
  
	response.json({
		text: 'wooouuf woouf'
	});
  }
  
    if(triggerWord == "bird"){
  
	response.json({
		text: 'roucoule roucoule et chie sur les passants'
	});
  }


});




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
