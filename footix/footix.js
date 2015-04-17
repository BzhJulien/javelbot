module.exports = function(request, response) {
	// var messageText = request.body.text; // the original message text

  var triggerWord = request.body.trigger_word; // the word that triggered this hook;
  
  
  switch(triggerWord.toLowerCase()){

	case 'but':
	response.json({
<<<<<<< HEAD
		text: 'Un but est marqué quand le ballon a entièrement franchi la ligne de but, entre les montants du but et sous la barre transversale, sous réserve qu\’aucune infraction aux Lois du Jeu n\’ait été préalablement commise par l\’équipe en faveur de laquelle un but aura été marqué. On peut aussi marquer contre son camp.'
	});

	
	case 'hodor.':
	response.json({
		text: 'Il joue en 9, non ?'
	});
	
	case 'hors-jeu':
	response.json({
		text: 'Être en position de hors-jeu n’est pas une infraction en soi. Un joueur se trouve en position de hors-jeu quand, au moment où la balle est jouée par un partenaire, lui ou une partie de son corps (buste, tête, pieds... ) est à l\'intérieur du terrain et plus près de la ligne de but adverse qu’à la fois le ballon et l’avant-dernier adversaire. Le dernier défenseur est la plupart du temps le gardien de but.'
	});
	
	case 'penalty':
	response.json({
		text: 'Un coup de pied de réparation pénalise l’équipe qui commet, dans sa propre surface de réparation et alors que le ballon est en jeu, l’une des dix fautes pour lesquelles un coup franc direct doit être accordé.'
	});
	
	case 'arbitre':
	response.json({
		text: 'Chaque match de football se dispute sous le contrôle d’un arbitre disposant de toute l\’autorité nécessaire pour veiller à l\’application des Lois du Jeu dans le cadre du match qu\’il est appelé à diriger.'
	});
=======
		text: 'Lucarne'
	});

	
	case 'hodor':
	response.json({
		text: 'L\'avant centre ?'
	});
	
>>>>>>> 068797ad0565e11e51fe17737037a0629642e95a
 }
};