// chapter 1 //

// if 2 given numbers represent your birth month and day in either order //
// log 'how did you know?', else log 'just another day...' //

function youSayItsYourBirthday(num1, num2){
    var month = 12;
    var day = 8;
    if(num1 === month & num2 === day || num2 === month & num1 === day){
        console.log('how did you know?');
    } else {
        console.log('just another sad day...');
    };
};

youSayItsYourBirthday(12, 8); // true
youSayItsYourBirthday(6, 16); // false
youSayItsYourBirthday(8, 12); // true
