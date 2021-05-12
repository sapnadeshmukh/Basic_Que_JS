var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11] ;
var new_list=[];
var i=0

while (i<n.length){
    var j=1;
    while(j< n.length){
        if (n[i]==n[j]){
            if (!(new_list.includes(n[i]))){
                new_list.push(n[i])
            }
        }
        j++;
    }i++;
}
console.log(new_list);


