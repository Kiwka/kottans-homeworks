var http = require('http');
var texts = ['','',''];
var callbackCount = 0;

var httpGetText = function (index) {
	http.get(process.argv[index], function cb(response) {
		response.on('data', function(data) {
			texts[index-2] += data.toString();
		});
		response.on('end', function(){
			callbackCount++;
			if (callbackCount===3) {
				texts.forEach(function(t) {
					console.log(t);
				});
		}});
	});
}

for (var i=2; i<5; i++) {
	httpGetText(i);
}