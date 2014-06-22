var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== '') {
        var word = line.split(''),
            swapped = [];

        word.forEach(function(letter) {
            if (/^[a-zA-Z]/gi.test(letter)) {
                if (letter === letter.toUpperCase()) {
                    swapped.push(letter.toLowerCase());
                }
                if (letter === letter.toLowerCase()) {
                    swapped.push(letter.toUpperCase());
                }
            } else {
                swapped.push(letter);
            }
        });
        console.log(swapped.join(''));
    }
});
