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
  
  switch(triggerWord){

	case 'teub':
	response.json({
		text: 'ce n\'est pas un animal'
	});
	
	case 'cat':
	response.json({
		text: 'miaou'
	});
	
	case 'dog':
	response.json({
		text: 'woof woof'
	});
	
	case 'squirrel':
	response.json({
		text: 'Sérieux, tu veux le cri d\'un écureuil ???'
	});

	case 'bird':
	response.json({
		text: 'piou piou'
	});

	case 'fish':
	response.json({
		text: 'bullul bullul'
	});	
	
  }
	
});




app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
