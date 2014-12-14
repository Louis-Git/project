var http = require('http'),
	url = require('url');

http.createServer(function(req, res) {

	var pathname = url.parse(req.url).pathname;

	if(pathname == '/'){
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('Home page');
	}
	else if(pathname == '/about'){
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('About us');
	}
	else if(pathname == '/redirect') {
		res.writeHead(300, {
			'Location': '/'
		});
		res.end();
	}
	else {
		res.writeHead(404, {
			'Content-Type': 'text/plain'
		});
		res.end('Page not found');
	}
}).listen(3000, "127.0.0.1");
console.log("Server running at 127.0.0.1");