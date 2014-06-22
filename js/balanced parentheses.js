var contains = function(string, substring) {
    return string.indexOf(substring) !== -1;
};

var printYes = functon() {
	console.log('YES');
};

var printNo = function() {
	console.log('NO');
};

var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line == '') {
        printYes();
    } 
    else if (line != '') {
        if (line.contains(':)') {
    		printYes();
        }
    }
});

