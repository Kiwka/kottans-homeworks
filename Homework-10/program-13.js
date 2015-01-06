var http = require('http');
var url = require('url');

function getParsedTime(t) {
	var date = new Date(Date.parse(t));
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	};
}

function getUnixTime(t) {
	return {
		"unixtime": Date.parse(t)
	}
}

var server = http.createServer(function (req, res) {
	var data = url.parse(req.url, true);
	var time = data.query.iso;
	var result;

	if (data.pathname === '/api/parsetime') {
		result = getParsedTime(time);
	} else if (data.pathname === '/api/unixtime') {
		result = getUnixTime(time);
	};

	if (result) {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(result));
	}
});


server.listen(process.argv[2]);