var newarr=[];
function mydata(list1){
    var sum=0;
    var i=0;
    while (i<list1.length){
        sum=sum+list1[i]
        newarr.push(sum);
        i++;

    }return newarr;
}
var arr=[1,4,5,7,9,12]
var a=mydata(arr);
console.log(a);
