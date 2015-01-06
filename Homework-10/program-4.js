var fs = require('fs');
var ArrayLength;

fs.readFile(process.argv[2], 'utf8', function done(err, text) {
	if (err) {
		console.log('Error in reading file')
	} else {
		ArrayLength = text.split('\n').length-1;
		console.log(ArrayLength)
	}
});