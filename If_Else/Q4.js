var readlinesync = require("readline-sync");
var water = readlinesync.question("enter how many litre:-   ");
if(water <1){
    console.log("paani bhrna hai")
}else if(water>=1 && water<10){
    console.log("nhi bhrna")

}else{
    console.log("Overflow")
}