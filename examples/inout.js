var questions = [
	'What is your name?',
	'What is your favorite color?',
	'What is your best feature?'
];

var answers = [];

function ask(i) {

	process.stdout.write(`\n ${questions[i]}  >  `);
}

process.stdin.on('data', function(data) {

	answers.push(data.toString().trim()); 

	if (answers.length < questions.length) 
	{
		ask(answers.length);
	}
	else 
	{
		process.exit();
	}

});

process.on('exit', function() {

	process.stdout.write(`\n ${answers[0]} has ${answers[1]} ${answers[2]}`);

});

ask(0);