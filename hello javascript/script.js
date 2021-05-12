// console.log("navagurukul");// # Aapke paas ek variable mein `raw_input` se gaadi ki speed ka ek integer hai
var readlinesync = require("readline-sync");
var speed = readlinesync.question("Gaadi ki speed daalo:-");


if (speed < 30){
    console.log("Speed  bahot kam hai")
}else if (speed < 60){
    console.log("Speed kam hai")
}else{
    console.log("Speed bahot fast hai")
}