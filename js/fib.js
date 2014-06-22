var fs  = require("fs");

//Recursion
function fib(n) {
	if (n <= 1) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	console.log(fib(parseInt(line, 10)));
    }
});