module.exports = function(request, response) {
  
  var messageText = request.body.text; // the original message text

  var triggerWord = request.body.trigger_word; // the word that triggered this hook;
  var keyword = messageText.slice(triggerWord.length + 1);
  keyword.split(' ');
  var searchUrl = 'https://www.youtube.com/results?search_query='
  var searchText = searchUrl.concat(keyword)
  
  switch(triggerWord.toLowerCase()){

	case 'video':
	response.json({
		text: searchText
	});

	case 'hodor.':
	response.json({
		text: 'https://www.youtube.com/watch?v=cxjw-w-V5k4'
	});

	
	case 'xvideo':
	response.json({
		text: 'http://www.pornhub.com/random'
	});
	
	
 }
};