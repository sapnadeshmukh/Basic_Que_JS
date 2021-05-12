for (index=1;index<=100;index++){
    if (index%3==0){
        console.log("Nav");
    }else if(index%7==0){
        console.log("Gurukul");
    }else if (index%3==0 &&index%7==0){
        console.log("Navgurukul")
    }else{
        console.log(index)
    }
}