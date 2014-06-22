/**
 * Helper function to split up our string and convert it to a number 
 *
 * @param item {string}
 * @param startIndex {int}
 * @param endIndex {int}
 * @return {int} the sliced string parsed using radix of 10
 **/
var sliceAndParseNumber = function(item, startIndex, endIndex) {
    return parseInt(item.slice(startIndex, endIndex), 10);
};

var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line != "") {
        //split string by the single space
        var tokens = line.split(' '),
            number = tokens[0],
            parsedNumber = parseInt(number, 10),
            pattern = tokens[1],
            minusIndex = pattern.indexOf('-'),
            plusIndex = pattern.indexOf('+'),
            x,
            y,
            result;

        if (parsedNumber < 100 || parsedNumber > 10000000000) {
            // N is not in range
        }
        //we are subtracting becuase '-' exists in the string
        else if (minusIndex !== -1) {
            x = sliceAndParseNumber(number, 0, minusIndex);
            y = sliceAndParseNumber(number, minusIndex, number.length);
            result = x - y;
        }
        //we should be adding
        else {
            x = sliceAndParseNumber(number, 0, plusIndex);
            y = sliceAndParseNumber(number, plusIndex, number.length);
            result = x + y;
        }
        console.log(result);
    }
});