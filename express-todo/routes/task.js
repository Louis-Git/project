

var express = require('express');
var router = express.Router();
var Todo = require('mongoose').model('Todo');

router.get('/', function(req, res){
	Todo.find({}, function(err, docs){
		res.render('task', {
			title : 'Tasks',
			docs : docs
		});
	});
});

module.exports = router;