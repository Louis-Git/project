
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	user_id : Number,
	content : String,
	updated_at : Date
});

mongoose.model('Todo', Todo);
mongoose.connect('mongodb://localhost/express-app');