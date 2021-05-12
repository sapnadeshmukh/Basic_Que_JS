var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
sumOfOdd=0
sumOfEven=0
for (index=0;index<elements.length;index++){
    if (elements[index]%2==0){
        sumOfEven+=elements[index];
    }else{
        sumOfOdd+=elements[index]

    }
}
console.log(sumOfEven)
console.log(sumOfOdd)