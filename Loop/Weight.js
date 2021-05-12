let index=1;
let sum=0;
let average=0;
while(index<=11){
    var readlinesync = require("readline-sync");
    var number = readlinesync.question("enter  a num:--");
    sum=sum+parseInt(number);
    index=index+1

}
console.log(sum)
console.log(sum/11)
