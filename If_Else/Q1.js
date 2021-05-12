var readlinesync = require("readline-sync");
var number = readlinesync.question("enter any number:-   ");
if (number <10) {
    console.log("10 se chota hai")

} else if ( number >10 && number <=20 ) {
    console.log("20 se chota hai");

} else {
    console.log("20 se bada hai")
  }