function upperCaser(input) {
	return input.toUpperCase();
};

function repeat(operation, num) {
	var i;
	for (i=0; i<num; i++) {
		operation();
	}
};

function doubleAll(numbers) {
	return numbers.map(function(x) {
		return x*2
	});
};

function getShortMessages(messages) {
	var result = [];
	messages.filter(function(mes){
		return mes.message.length < 50;
	}).map(function(mes){
		result.push(mes.message);
	})
	return result;
};

module.exports = upperCaser;
module.exports = repeat;
module.exports = doubleAll;
module.exports = getShortMessages;