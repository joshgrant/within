var Person = require('./lib/Person');

var josh = new Person('Josh');
var sam = new Person('Sam');

sam.on('speak', function(words) {
	console.log(this.name + ": " + words);
})

josh.on('greeting', function(words) {
	console.log(this.name + ": " + words);
});

sam.emit('speak', 'Suck my dick');
josh.emit('greeting', 'Hello!');