console.log(process.argv);

function grab(flag) {
	var index = process.argv.indexOf(flag);

	return (index === -1) ? null : process.argv[index+1];
}

var username = grab('--username');
var password = grab('--password');

if (!username || !password) {
	console.log("No login information.");
} else {
	console.log(`Welcome ${username}!`);
}