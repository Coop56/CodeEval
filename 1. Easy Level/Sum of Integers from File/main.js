var fs  = require("fs");
var total = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        total += parseInt(line);
    }
});
console.log(total);