var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line != "") {
        var json = JSON.parse(line),
        	menuItems = json.menu.items,
        	sum = 0;

        menuItems.forEach(function(item) {
            if (item) {
                if ('label' in item) {
                    sum += item.id;
                }
            }
        });
        console.log(sum);
    }
});
