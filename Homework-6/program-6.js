function countWords(inputWords) {
	'use strict';
	return inputWords.reduce(function(acc, curr){
		if (typeof acc[curr] == 'undefined') {
			acc[curr] = 1;
		} else {
			acc[curr] += 1;
		}
		return acc;
	}, {});
}

module.exports = countWords;