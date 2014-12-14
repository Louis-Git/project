var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('default', {
		title: 'Home',
		users: ['Ray', 'Louis']
	});
});

app.get('/about', function(req, res){
	res.send('About page');
});

app.get('/who/:name?', function(req, res){
	var name = req.params.name; // gets the name of name parameter passed in the url;
	res.send('Welcome ' + name);
});

app.get('/who/:name?/:title?', function(req, res){
	var name = req.params.name; // gets the name of name parameter passed in the url;
	var title = req.params.name;
	res.send('Welcome ' + name + "\nTitle " + title);
});


var server = app.listen(3000, function(){
	console.log('listening on port 3000')
});