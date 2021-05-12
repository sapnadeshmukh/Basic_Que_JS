var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100] 
crorepati=0
lakhpati=0
dilwale=0
for(index=0;index<kitna_paisa_hai.length;index++){
    if (kitna_paisa_hai[index]>=10000000){
        crorepati++;


    }else if(kitna_paisa_hai[index]>=100000){
            lakhpati++;
    }else{
        dilwale++;
    }
}
console.log(crorepati ,"Crorepati hai");
console.log(lakhpati,"Lakhpati hai");

console.log(dilwale,"Dilwale hai");