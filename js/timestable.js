var max = 12,
	x = 1,
	y =1;

for (var i = 1; i <= max; i++) {
	x += i;
	for (var j = 1; j <= max; j++) {
		y += j;
	}
	console.log(y);
}