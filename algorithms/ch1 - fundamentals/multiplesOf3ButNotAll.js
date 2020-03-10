// chapter 1 //

// using a for loop, print multiples of three from -300 to 0 //
// Skip -3 and -6 //

function multiplesOfThree(){
    for(x=-300; x<=0; x++){
        if(x % 3 === 0){
            if(x == -3 || x == -6){
                continue;
            }
            console.log(x);
        };
    };
};

multiplesOfThree();