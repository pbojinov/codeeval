var map = {
    a: 'y',
    b: 'h',
    c: 'e',
    d: 's',
    e: 'o',
    f: 'c',
    g: 'v',
    h: 'x',
    i: 'd',
    j: 'u',
    k: 'i',
    l: 'g',
    m: 'l',
    n: 'b',
    o: 'k',
    p: 'r',
    q: 'z',
    r: 't',
    s: 'n',
    t: 'w',
    u: 'j',
    v: 'p',
    w: 'f',
    x: 'm',
    y: 'a',
    z: 'q'
};

var fs = require('fs');
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    var translation = [];
    if (line !== '') {
        var chars = line.split('');

        chars.forEach(function(c) {
            var translated = map[c] || ' ';
            translation.push(translated);
        });
    }
    console.log(translation.join(''));
});
