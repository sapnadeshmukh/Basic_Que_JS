var readlinesync = require("readline-sync");
var varx = readlinesync.question("enter first number:-");
var vary = readlinesync.question("enter second number:-");

if (varx%vary==0){
    console.log("Divisible hai")
}
else{
    console.log("Divisible nhi hai")
}