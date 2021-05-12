var readlinesync = require("readline-sync");
var varx = readlinesync.question("enter any number:-");
if (varx%5==0 && varx%15==0){
    console.log("Divisible hai")
}else{
    console.log("Divisible nhi hai")
}