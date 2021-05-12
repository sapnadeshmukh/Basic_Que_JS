var numbers=[99,234,678,909,66,77,98,34,5,7,9]

for (index=0;index<numbers.length;index++){
    for(j=0;j<numbers.length;j++){
        if(numbers[j]>numbers[j+1]){
            let temp=numbers[j];
            numbers[j]=numbers[j+1];
            numbers[j+1]=temp;
        }
    }
}console.log(numbers)




