module.exports = function(request, response) {
  
  var messageText = request.body.text; // the original message text

  var triggerWord = request.body.trigger_word; // the word that triggered this hook;

  
  switch(triggerWord.toLowerCase()){

	case 'test':
	response.json({
		text: 'Oui ! Je dis Oui !'
	});
	
 }
};