var fs = require('fs');
var text = fs.readFileSync(process.argv[2]);
var textArray = text.toString().split('\n');

console.log(textArray.length-1);