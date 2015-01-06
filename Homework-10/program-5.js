var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(err, list) {
	list.forEach(function(current) {
		if (path.extname(current)==='.'+process.argv[3]) {
			console.log(current);
		}
	})
});