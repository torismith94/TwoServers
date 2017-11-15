var http = require('http');
var portOne = 7000; 
var portTwo = 7500;

function handleRequestOne(request, response) {
	response.end('Youre a JavaScript mastermind!');
}

function handleRequestTwo(request, response) {
	response.end("For JS strength, practice you must");
}

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);

serverOne.listen(portOne, function () {
	console.log('Server listening on: Http://localhost:' + portOne);

});

serverTwo.listen(portTwo, function () {
	console.log('Server listening on: Http://localhost:' + portTwo);

});
