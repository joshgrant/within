var path = require('path');

var weird = "Josh, Grant"

var justWeird = weird.slice(6)

console.log(`Hello, Mr. ${justWeird}!`);

console.log(`This is really strange: ${path.basename(__filename)}`);

console.log(__dirname);

console.log(__filename);