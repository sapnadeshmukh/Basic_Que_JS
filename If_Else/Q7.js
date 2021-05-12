var readlinesync = require("readline-sync");
var varx = readlinesync.question("enter first number:-");
var vary = readlinesync.question("enter second number:-");
console.log(varx)
console.log(vary)
if (varx > vary){
    console.log(varx);
}
else{
    console.log(vary);
}