var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));
//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
  response.send('Javel Dir à tout le monde');
});

app.post('/zanimaux', require('./zanimaux/zanimaux'));
app.post('/footix', require('./footix/footix'));
<<<<<<< HEAD
app.post('/youtube', require('./youtube/youtube'));
=======
>>>>>>> 068797ad0565e11e51fe17737037a0629642e95a

app.listen(app.get('port'));
