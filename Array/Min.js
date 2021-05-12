var numbers = [50, 40, 23, 70,89, 56,1, 12, 5, 10,0, 7] ;
i=0
maxNum=numbers[i];
while(i<=numbers.length){
    if (maxNum>numbers[i]){
        maxNum=numbers[i]
    }i++;
}console.log(maxNum)