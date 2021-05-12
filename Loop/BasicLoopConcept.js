var counter = 0
while (counter < 5){
    console.log("navgurukul")
    counter = counter + 1;
}


// even number
counter = 1
while (counter < 100){
    if (counter % 2 == 0){
       console.log(counter) 
    }
    counter = counter + 1 
}


// use break
index = 0;  
while (1){
    console.log(index," ",end = "");  
    index=index+1;  
    if (index == 10){
        break;  


    }
} 
console.log("Found at",index,"location") ;



// use continue
  for (i = 0; i < 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }
  
  
