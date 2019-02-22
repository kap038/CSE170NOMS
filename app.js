
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var homepage = require('./routes/homepage');
var profile = require('./routes/profile');
var recipe = require('./routes/recipe');
var recipe_steps = require('./routes/recipe_steps');
var login = require('./routes/login');
var signup = require('./routes/signup');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/profile', profile.view);
app.get('/recipe', recipe.view);
app.get('/recipe/:id/:type/complete', recipe_steps.complete);
app.get('/recipe/:id/:type/:step', recipe_steps.view);
app.get('/recipe/:id', recipe.view);
app.get('/homepage', homepage.view);
app.get('/signup', signup.view);
app.get('/json/:id', recipe.recipeJson);
app.get('/json/', recipe.allJson);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
