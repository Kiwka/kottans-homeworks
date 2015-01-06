var http = require('http');
var allData = '';

http.get(process.argv[2], function cb(response) {
	response.on('data', function(data) {
		allData += data.toString();
	});
	response.on('end', function(){
		console.log(allData.length);
		console.log(allData);
	})
});