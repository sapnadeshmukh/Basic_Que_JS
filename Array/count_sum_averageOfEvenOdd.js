var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43] 
sumOfOdd=0
sumOfEven=0
countOdd=0
countEven=0
AverageOfEven=0
AverageOfodd=0
for (index=0;index<elements.length;index++){
    if (elements[index]%2==0){
        countEven++;
        sumOfEven+=elements[index];
    }else{
        countOdd++;
        sumOfOdd+=elements[index]

    }
}
console.log(sumOfEven)
console.log(countEven)
AverageOfEven=sumOfEven/countEven
console.log(AverageOfEven)

console.log(sumOfOdd)
console.log(countOdd)
AverageOfodd=sumOfOdd/countOdd
console.log(AverageOfodd)
