var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200);
	var text = fs.createReadStream(process.argv[3]);
	text.pipe(res);
});

server.listen(process.argv[2]);