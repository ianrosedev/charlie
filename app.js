//Exit by sending SIGTERM to ->Node.js->Execute command 

var express = require('express');
var app     = express();
var path    = require('path');

//Twitter API

var twitter = require('twitter');
var client = new twitter({
	consumer_key: 'UUGfWBPmsOHM4AyXuhRpuPC1Z',
	consumer_secret: 'uvMVDSYfBHjCZXmGm0cDebxjh4qQ3MslxMSCCKyXo4UnBhWwQR',
	access_token_key: '2836153652-06sjKMgdoLVMHRs6eREYiLpFWJGWmqghPCz9uON',
	access_token_secret: '2qYDyXUJaeCiUk4lVK44lpJxx6AnZ3S037aXJt8lybfN2'
});

var x;

client.stream('statuses/filter', {track: 'north carolina'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    // Need AJAX var x = tweet.text;
    // return x;
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
  //Need AJAX res.send(JSON.stringify(x));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);
console.log('\nRunning at Port 8080');