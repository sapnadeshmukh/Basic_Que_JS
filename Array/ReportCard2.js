// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
// ]
// marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65],
//     [95, 45, 78]
// ]
marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78],
    [87, 67, 49, 68, 88]
]

var average=0;
for(i=0;i<marks.length;i++){
    var sum=0;

    for(j=0;j<marks[i].length;j++){
        sum=sum+marks[i][j]
    
    average=(sum/marks[i].length)
    }
    console.log(parseInt(average))
    
}



