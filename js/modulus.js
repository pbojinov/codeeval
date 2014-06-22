var fs  = require("fs");

function modulo(x, y) {
	if (x < y) {
		return x;
	}
	while (x >= y) {
		x = x - y;
	}
	return x;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var numbers = line.split(','),
    		x = parseInt(numbers[0], 10),
    		y = parseInt(numbers[1], 10);
		console.log(modulo(x, y));
    }
});

/* Tests 
modulo(1, 2) === (1 % 2)
modulo(10, 2) === (10 % 2)
modulo(50, 1) === (50 % 1)
modulo(10, 33) === (10 % 33)
*/