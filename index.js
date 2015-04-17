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
app.post('/youtube', require('./youtube/youtube'));

app.listen(app.get('port'));
