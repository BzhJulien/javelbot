var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
  response.send('Javel Dir à tout le monde');
});

app.post('/slack', function(request, response) {

  // var messageText = request.body.text; // the original message text

  var triggerWord = request.body.trigger_word; // the word that triggered this hook;
  
  
  switch(triggerWord.toLowerCase()){

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
	
	case 'dramatic':
	response.json({
		text: 'https://www.youtube.com/watch?v=a1Y73sPHKxw'
	});
	
	case 'salut':
	response.json({
		text: 'Je te fais des bisous tous doux'
	});
	
	case 'hello':
	response.json({
		text: 'Quand quelqu\'un arrive et est poli, j\'ai le gode-ceinture tout dur'
	});
	
	case 'coucou':
	response.json({
		text: 'COUROUCOUCOU ROUCOUCOU STACH STACH'
	});
	
	case 'hodor':
	response.json({
		text: 'hodor ?'
	});
	
	case 'barça':
	response.json({
		text: 'Enfin, nous ne parlerons que des vraies équipes'
	});
	
	case 'messi':
	response.json({
		text: 'Il m\'a piqué mon gode-ceinture'
	});
	
	case 'merci':
	response.json({
		text: 'De rien'
	});
	
	case 'cool':
	response.json({
		text: 'Raoul ?'
	});
	
	case 'ciao':
	response.json({
		text: 'Arrivederci'
	});
	
  }
	
});


app.post('/footix', function(request, response) {
	
	// var messageText = request.body.text; // the original message text

  var triggerWord = request.body.trigger_word; // the word that triggered this hook;
  
  
  switch(triggerWord.toLowerCase()){

	case 'but':
	response.json({
		text: 'tout à fait Thierry'
	});
	
	case 'hors-jeu':
	response.json({
		text: 'D\un bon metre'
	});
	
	case 'penalty':
	response.json({
		text: 'Quand même sévère, non ?'
	});
	
 }
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
