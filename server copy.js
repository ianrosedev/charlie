//Exit by sending SIGTERM to ->Node.js->Execute command 

var express = require('express');
var app     = express();
var path    = require('path');

//Twitter API

var twitter = require('twitter');
var client = new twitter({
	consumer_key: '#',
	consumer_secret: '#',
	access_token_key: '#',
	access_token_secret: '#'
});

client.stream('statuses/filter', {track: 'north carolina'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);
console.log('\nRunning at Port 8080');