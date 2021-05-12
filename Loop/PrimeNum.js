var readlinesync = require("readline-sync");
var number = readlinesync.question("enter num:--");
var result=2
var index;
for(index=2;index<=number/2;index++) {
    if (number%index==0) {
        result++;
        break;
    }
}
if (result==2) {
    console.log("Prime number");
    
}else {
    console.log("Not prime number");
}