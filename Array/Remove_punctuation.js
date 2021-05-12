

var mydata = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
    return string.replace(mydata, '');
}
var my_str="Hello!!!!,he said ---- and went."

console.log(removePunctuation(my_str));