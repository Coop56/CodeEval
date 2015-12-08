/* 

Code Eval Challenge - Javascript - Easy - Sum of Digits - https://www.codeeval.com/open_challenges/21/

CHALLENGE DESCRIPTION: Given a positive integer, find the sum of its constituent digits.

*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var total = 0;
        line.split('');
        for (i = 0; i < line.length; i++) {
            total += parseInt(line[i]);
        }
        console.log(total);
    }
});
