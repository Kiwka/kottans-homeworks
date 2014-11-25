function upperCaser(input) {
	'use strict';
	return input.toUpperCase();
}

function repeat(operation, num) {
	'use strict';
	var i;
	for (i=0; i<num; i++) {
		operation();
	}
}

function doubleAll(numbers) {
	'use strict';
	return numbers.map(function(x) {
		return x*2;
	});
}

function getShortMessages(messages) {
	'use strict';
	var result = [];
	messages.filter(function(mes){
		return mes.message.length < 50;
	}).map(function(mes){
		result.push(mes.message);
	});
	return result;
}

function checkUsersValid(goodUsers) {
	'use strict';
	return function(submittedUsers) {
		return submittedUsers.every(function(submittedUser){
			return goodUsers.some(function(goodUser){
				return submittedUser.id == goodUser.id;
			});
		});
	};
}

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

function reduce(arr, fn, initial) {
	'use strict';
	if(!arr.length) return;
	initial = fn(initial, arr[0], 0, arr);
	reduce(arr.slice(1), fn, initial);
	return initial;
}

function duckCount() {
	'use strict';
	return Array.prototype.slice.call(arguments).filter(function(obj){
		return Object.prototype.hasOwnProperty.call(obj, 'quack');
	}).length;
}

var slice = Array.prototype.slice

function logger(namespace) {
	'use strict';
	return function(){
		console.log.apply(console, [namespace].concat(slice.call(arguments)))
	}
}


function getDependencies () {

}

module.exports = upperCaser;
module.exports = repeat;
module.exports = doubleAll;
module.exports = getShortMessages;
module.exports = checkUsersValid;
module.exports = countWords;
module.exports = reduce;
module.exports = duckCount;
module.exports = logger;
module.exports = getDependencies;