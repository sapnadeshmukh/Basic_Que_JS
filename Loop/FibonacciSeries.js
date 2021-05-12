var readlinesync = require("readline-sync");
var number = readlinesync.question("enter a Num:--");
var i=0;
var j=1;
var k;
console.log(i);
console.log(j);
var count=2;
while (count<number){
    k=i+j;
    count++;
    console.log(k)
    i=j;
    j=k;


}

