var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
		fs.watchFile('file', function (curr, prev) {
		  console.log(curr.size);
		});
    }
});