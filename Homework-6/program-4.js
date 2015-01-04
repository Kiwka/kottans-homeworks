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

module.exports = getShortMessages;