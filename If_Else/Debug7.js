// # `raw_input` ka use kar ke user se din aur abhi ka samay (lunch, dinner) input
// # leke uss samay ka menu print karvana hai. Abhi hum sirf monday aur tuesday ke
// # liye likh rahe hain
// # Monday aur Tuesday dono time daal roti banegi, bas Tuesday raat ko Pav Bhaji banegi
// # Neeche waale program mein jab tuesday daalte ho toh pav bhaji print nahi hota.
// # Isko sahi karo.
var readlinesync = require("readline-sync");
var day = readlinesync.question("Aaj ka din kya hai? (monday/tuesday) > ");
var time = readlinesync.question(" Kaunse samay ka khana banana hai? (lunch/dinner) > ");

if( day == "monday" || day == "tuesday"){
    console.log("Daal-Roti banegi aaj")
}else if (day == "tuesday" || time == "dinner"){
    console.log("Pav-Bhaji banegi aaj toh ")}