// create a function that reverses a string
// 'hi my name is ricardo' should be:
//

function reverseString(str){
    // check input
    if (!str || str.length < 2 || typeof str !== 'string'){
        return 'Not reversable'
    } 
    // convert it into an arr
    const rvrsArr = [];

    // gets length of string to work with array
    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--){        
        rvrsArr.push(str[i]);
    }

    // joins the items as an string
    return rvrsArr.join('');
};

function reverseWithBuiltIns(str){
    return str.split('').reverse().join('');
}

const reverseES6 = str => str.split('').reverse().join('');

console.log( reverseString('hello') );
// reverseWithBuiltIns('ricardo');
// console.log(reverseES6('yowwwwza'));