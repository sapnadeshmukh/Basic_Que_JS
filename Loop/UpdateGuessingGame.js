secretNum=5
index=1;
while (index<=10){
    var readlinesync = require("readline-sync");
    var number = readlinesync.question("enter a num between 1 to 10:--");
    if (number< secretNum){
        console.log("aapka number chota hai! Ek aur baar try karo")
        
    }else if(number>secretNum){
        console.log("aapka number bada hai! Ek aur baar try karo.")
    }else{
        console.log("Waah! Aapne number guess kar liya.")
        break;
    }
    index++;
}
