var fs = require('fs'),
    firstLine = true,
    sortable = [],
    sorted = [],
    numLines;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line != '') {
        if (firstLine) {
            numLines = parseInt(line, 10);
            firstLine = false;
        } else {
            sortable.push([line, line.length]);
        }
    }
});

// sort items by length
sorted = sortable.sort(function(a,b) {
    return b[1] - a[1];
});

// print out the N longest lines to stdout
for (var i=0; i < numLines; i++) {
    console.log(sorted[i][0])
}