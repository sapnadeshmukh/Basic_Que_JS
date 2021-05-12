// using for loop

var readlinesync = require("readline-sync");
var num = readlinesync.question("enter Nth prime Num:--");
var i=2
var count=0
while(true){
    flag=0
    for (j=1;j<i;j++){
        if((i%j==0)){
            flag++
        }

    }if (flag==1){
        count++;
        console.log(i)
        if(count==num){
            break;
        }
    }
    i++;

}




// using while loop

var readlinesync = require("readline-sync");
var num = readlinesync.question("enter Nth prime Num:--");
var i=2
var count=0
while (true){
    j=1
    flag=0
    while(j<i){
        if(i%j==0){
            flag++
        }
        j++
    }
    if (flag==1){
        count++
        console.log(i)
        if (count==num){
            break;

        }
    }
    i++
}

