let readlinesync = require("readline-sync");
let num = readlinesync.question("enter any position:--");

var position=0
var index=1
while (true){
    var c=0
    for(j=2;j <=index;j++){
        if (index%j==0){
            c=c+1
        
    }
}
    if(c==1){
        position=position+1
        if (position==num){
            console.log(position,"Position,","Prime Num is=",index);
            break
        }

    }
    index=index+1
    
}