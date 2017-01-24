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


// read a txt file
// var fs = require("fs");

// fs.readFile('input.txt', function(err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("Program Ended");

// print process.argv
// console.log(process.argv[0])

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

if (process.argv[2]) {
	var name = process.argv[2];
	if (process.argv[3]) {
		name += ' ' + process.argv[3]
	}
}
// const name = process.argv[2] + ' ' + process.argv[3];
console.warn(`Goodmorning ${name}, welcome back`);