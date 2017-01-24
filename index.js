var http = require("http");

http.createServer(function(request, response) {
	//Send the HTTP header
	//HTTP Status: 200 : OK
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(5555);
// Same as http.listen(5555); listening through port 5555

//Console will print the message
console.log('Server running at http://127.0.0.1:5555/');

// var colors = require('colors');

// console.log("hello world");
// console.log("hello world".red);
// console.log("hello world".green);
// console.log("hello world".yellow);
// console.log("hello world".rainbow);