console.time('a');
for (var i = 0; i < 1000000; i++) {
    (function() {
      var d = document.getElementById('fb-root');
    })();
}
console.timeEnd('a');
a: 1033.280ms

console.time('a');
for (var i = 0; i < 1000000; i++) {
    (function() {
      var d = document.querySelector('#fb-root');
    })();
}
console.timeEnd('a');
a: 1277.609ms
