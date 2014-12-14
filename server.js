/*var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello world');
}).listen(3000, '127.0.0.1');
console.log("server running at http://127.0.0.1");*/

function test1(food, drink, callback){
	console.log("this is my breakfast " + food + " " + drink);
	if(callback && typeof(callback) == "function") {
		callback();
	}
}

test1("toast", "coffee", function(){
	console.log('finished breakfast');
});