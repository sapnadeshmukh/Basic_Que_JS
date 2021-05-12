number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]


var new_list=[];

var i=0;
while(i<n.length){
    j=i+1
    while(j<n.length){
        if (n[i] +n[j]==number){
            var a=[n[i],n[j]]
            
            new_list.push(a)
        }
        j++;
    }
    i++;
}console.log(new_list)

Output: [[11,19], [12,18],[13,17]]