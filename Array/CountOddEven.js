var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
countOdd=0
countEven=0
for (index=0;index<elements.length;index++){
    if (elements[index]%2==0){
        countEven++;
    }else{
        countOdd++;
    }
}
console.log(countEven)
console.log(countOdd)