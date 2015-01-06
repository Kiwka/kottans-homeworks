var net = require('net');
var date = new Date();

function conv(str, num) {
	return ('0'+str).slice(-num);
}

var server = net.createServer(function (socket) {
	var timeNow = conv(date.getFullYear(),4)+'-'+conv(date.getMonth()+1, 2)+'-'+conv(date.getDate(), 2)
		+' '+conv(date.getHours(),2)+':'+conv(date.getMinutes(),2);
	socket.end(timeNow);
});
server.listen(process.argv[2]);