var readlinesync = require("readline-sync");
var number = readlinesync.question("enter how many num:--");
sum=0;
index=1;
while (index<=number){
    var num = readlinesync.question("enter a num:--");
    sum +=parseInt(num);
    index++;
}
console.log(sum);





