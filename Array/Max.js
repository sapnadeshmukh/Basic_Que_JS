var numbers = [50, 40, 23, 70,89, 56, 12, 5, 10, 7] ;
i=0
maxNum=numbers[i];
while(i<=numbers.length){
    if (maxNum<numbers[i]){
        maxNum=numbers[i]
    }i++;
}console.log(maxNum)

function myArrayMin(arr) {
    return Math.max.apply(null, arr);
  }
console.log(myArrayMin([23,5,4,5,34,8,99]))


var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ]; 
cars.sort(function(a, b){return a.year - b.year}); 
console.log(cars)