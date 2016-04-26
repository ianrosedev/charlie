//Exit by sending SIGTERM to ->Node.js->Execute command 

var express = require('express');
var app     = express();

app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/public'));

//set up handlebars view engine
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
<<<<<<< HEAD
=======
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// View at localhost:8080
app.get('/', function(req, res) {
  res.render('home');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
             app.get('port'));
});

/*//Twitter API
var twitter = require('twitter');
var client = new twitter({
	consumer_key: 'UUGfWBPmsOHM4AyXuhRpuPC1Z',
	consumer_secret: 'uvMVDSYfBHjCZXmGm0cDebxjh4qQ3MslxMSCCKyXo4UnBhWwQR',
	access_token_key: '2836153652-06sjKMgdoLVMHRs6eREYiLpFWJGWmqghPCz9uON',
	access_token_secret: '2qYDyXUJaeCiUk4lVK44lpJxx6AnZ3S037aXJt8lybfN2'
>>>>>>> 0b12950... Updates as I learn
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

<<<<<<< HEAD
// View at localhost:8080
app.get('/', function(req, res) {
  res.render('home');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
             app.get('port'));
});
=======
client.stream('statuses/filter', {track: '@SFGiants'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.user.name + ' --> ', tweet.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
}); */

/*
//Yelp API
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: 'a1DR6z99oBjRl6lLboB-_A',
  consumer_secret: 'o7XrLbHRmgHZpNL8IUdkWBVFHBU',
  token: 'Oc13JBYgBwiXzf48mQ83jkNT8p3bA3YI',
  token_secret: '1-tCgpafThuXNmQUuHFVvmBrVFI',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: 'nachos', location: 'durham'})
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});
*/
>>>>>>> 0b12950... Updates as I learn
