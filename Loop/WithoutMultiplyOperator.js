var readlinesync = require("readline-sync");
var number1 = readlinesync.question("enter 1st Num:--");
var number2 = readlinesync.question("enter 2nd Num:--");
let index=1;
let mult=0;
for (index=1;index<=number1;index++){
    mult=mult+parseInt(number2);
}


console.log(mult)