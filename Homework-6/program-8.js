function duckCount() {
	'use strict';
	return Array.prototype.slice.call(arguments).filter(function(obj){
		return Object.prototype.hasOwnProperty.call(obj, 'quack');
	}).length;
}

module.exports = duckCount;