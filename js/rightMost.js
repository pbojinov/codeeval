var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var a = line.split(',');
        console.log(a[0].lastIndexOf(a[1]));
    }
});