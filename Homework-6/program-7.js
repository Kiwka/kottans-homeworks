function reduce(arr, fn, initial) {
	'use strict';
	if(!arr.length) return;
	initial = fn(initial, arr[0], 0, arr);
	reduce(arr.slice(1), fn, initial);
	return initial;
}

module.exports = reduce;