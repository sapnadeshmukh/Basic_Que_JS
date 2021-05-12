secretNum=5
index=1;
while (index<=5){
    var readlinesync = require("readline-sync");
    var number = readlinesync.question("enter a num between 1 to 10:--");
    if (number==secretNum){
        console.log("You have Guessed!!")
        break;
    }else{
        console.log("Not Guessed!")
    }
    index++;
}
