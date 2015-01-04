function doubleAll(numbers) {
	'use strict';
	return numbers.map(function(x) {
		return x*2;
	});
}

module.exports = doubleAll;