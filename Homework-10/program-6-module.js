var fs = require('fs');
var path = require('path');

module.exports = function(way, ext, cb) {
	fs.readdir(way, function callback(err, list) {
		if (err) {
			return cb(err);
		} else {
			return cb(null, list.filter(
				function(current) {
					return path.extname(current)==='.'+ext
			}));
		}
	});
}