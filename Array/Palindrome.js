var readlinesync = require("readline-sync");
var str = readlinesync.question("enter any String:-   ");
var emptyList=[]
index=str.length-1
while(index>=0){
    console.log(str[index].end=" ")
    emptyList.push(str[index])
    index--;
}
console.log(emptyList)
var a=(emptyList.join(""))
console.log(a)
if (str==a){
    console.log("Yes")
}else{
    console.log("No")
}



