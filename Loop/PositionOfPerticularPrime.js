let readlinesync = require("readline-sync");
let number = readlinesync.question("enter  a prime num:--");
var position=0;
var index=1;
for (index=1;index<=number;index++){
    var count=0
    for (var j=2;j<=index;j++){
        if (index%j==0){
            count=count+1;
}   
        }
    
    if (count==1){
        position=position+1;
        if (index==number){
            console.log("position is prime num is=",position)
        
        }
    

    }
    
}
