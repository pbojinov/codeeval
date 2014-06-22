var fs = require('fs');

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== '') {
    	//convert each string to number and print in base 2
        console.log(parseInt(line, 10).toString(2));
    }
});
