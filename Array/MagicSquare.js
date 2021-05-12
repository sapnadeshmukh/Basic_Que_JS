var magic_square = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 

// For Rows
var sum1=0;

for (i=0;i<magic_square.length;i++){
    var sumRow=0;
    for(j=0;j<magic_square[i].length;j++){
        // console.log(magic_square[i][j])
        sumRow=sumRow+magic_square[i][j]
    // }console.log(sumRow);/
    }

}console.log("sumOfRows:--",sumRow);





// // For Columns
for (i=0;i<magic_square.length;i++){
    var sumColumn=0;
    for(j=0;j<magic_square[i].length;j++){
        // console.log(magic_square[j][i])
        sumColumn=sumColumn+magic_square[j][i]
    // }console.log(sumColumn);
    }
}console.log("sumOfcolumn:--",sumColumn);


// // For left to right diagonals
var j=0;
var sumLeftDiagonal=0;
for(i=0;i<magic_square.length;i++){
    var MainDigitL=(magic_square[i][j])
    // console.log(MainDigitL)
    sumLeftDiagonal=sumLeftDiagonal+MainDigitL
    j++;
}
console.log("sum of diagonal from left to right:--",sumLeftDiagonal)


// // sum of right to left diagonals
var sumRightDiagonal=0;
var j=2
for (i=0;i< magic_square.length;i++){
    var MainDigitR=(magic_square[i][j])
    // console.log(MainDigitR)
    sumRightDiagonal=sumRightDiagonal+MainDigitR
    j--;
}
console.log("sum of diagonal from right to left:--",sumRightDiagonal)


if (sumRow==sumColumn && sumLeftDiagonal==sumRightDiagonal){
    console.log("Magic Square!!!");
}else{
    console.log("Not Magic Square!!!")

}



