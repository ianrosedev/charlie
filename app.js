var express = require('express');
var app     = express();

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

// View at localhost:8080
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
             app.get('port'));
});