var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7] ;
console.log(numbers.length)


var numbers=[50, 40, 23,24,25, 70, 56, 12, 5, 10, 7];
var c=0
var i=0 
while (i<(numbers.length)){
    if(numbers[i] >20 && numbers[i]<40){
        c++;
    }
    i++;
}
console.log(c)