module.exports.prettyPrint = function(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i].content);
	}
}

module.exports.pretty = (array) => {

	var result = [];

	for (var i = 0; i < array.length; i++) {
		result.push(array[i].content);
	}

	return result;
}
