var filterExt = require('./program-6-module');

filterExt(process.argv[2], process.argv[3], function (err, files) {
	if (err) {
		console.log(err);
	} else {
		files.forEach(function (f) {console.log(f)});
	}
})