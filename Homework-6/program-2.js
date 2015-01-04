function repeat(operation, num) {
	'use strict';
	var i;
	for (i=0; i<num; i++) {
		operation();
	}
}

module.exports = repeat;