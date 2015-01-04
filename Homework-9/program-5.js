module.exports = function average(...args) {
	var result = 0;
	var length = args.length;
	args.forEach( x => result += x );

	return result/length;
};