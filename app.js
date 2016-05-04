var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');

var credentials = require('./credentials.js');

app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/public'));



//Handlebars view engine
var handlebars = require('express-handlebars').create({
  defaultLayout: 'main',
  //sections helper
  helpers: {
  section: function(name, options) {
      if(!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home');
});

//Twitter API
var twitter = require('twitter');
var client = new twitter(credentials.twitter);
client.stream('statuses/filter', {track: 'donald trump'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.user.name + ' --> ', tweet.text);
	});
  stream.on('error', function(error) {
    throw error;
  });
}); 

// View at localhost:8080
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
             app.get('port'));
});