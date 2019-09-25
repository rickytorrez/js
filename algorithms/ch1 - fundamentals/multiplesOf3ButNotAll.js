// chapter 1 //

// using a for loop, print multiples of three from -300 to 0 //
// Skip -3 and -6 //

function multiplesOf3(){
    for(var x = -300; x <= 0; x++){
        if(x % 3 === 0){
            if(x == -6 || x == -3){
                break
            }
            console.log(x)
        }
    }
}


multiplesOf3();