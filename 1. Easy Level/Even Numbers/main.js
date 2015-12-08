/* 

Code Eval Challenge - Javascript - Easy - Even Numbers - https://www.codeeval.com/open_challenges/100/

CHALLENGE DESCRIPTION: Write a program which checks input numbers and determines whether a number is even or not.

*/

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        if (parseInt(line) % 2 === 0) {
            console.log(1);
        } else {
            console.log(0);
        }
    }
});