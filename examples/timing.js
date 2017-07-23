var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaiting = 0;

function writeWaitingPercent(p) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write('Waiting... ' + p + '%');
}

writeWaitingPercent(percentWaiting);

var interval = setInterval(function() { 
	currentTime += waitInterval;
	percentWaiting = Math.floor((currentTime/waitTime) * 100.0);
	writeWaitingPercent(percentWaiting);
}, waitInterval);

setTimeout(function() {
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log('\nDone!');
}, waitTime);
