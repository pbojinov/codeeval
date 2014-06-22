var count_occurences = function(word, char) {
    var counter = 0;
    for (var i = 0, len = word.length; i < len; i++) {
        var matches = word.indexOf(char, i);
        if (matches > -1) {
            counter++;
            i = matches;
        }
    }
    return counter;
}

var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== '') {
        // convert each string to number in base 2
        // then find all occurences of 1 globally in the string
        var numberToBinaryString = parseInt(line).toString(2);
        console.log(count_occurences(numberToBinaryString, '1'));
    }
});
