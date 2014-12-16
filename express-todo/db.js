var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var Todo = new Schema({
	task : String
});

mongoose.model( 'Todo', Todo );
mongoose.connect( 'mongodb://localhost/express-todo', function(err){
	if(!err){
		console.log('Conected to MongoDB');
	}
	else {
		throw err;
	}
});