// merge sorted arrays

function mergeArrays(arr1, arr2){
    if(arr1.length < 1 || arr2.length < 1){
        return 'Not sortable'
    };
    // create a new array
    const sortedArrays = [];

    // loop through first array and push values
    for(let i = 0; i <= arr1.length-1; i++){
        sortedArrays.push(arr1[i]);
    };

    // loop through second array and push values
    for(let j = 0; j <= arr2.length-1; j++){
        sortedArrays.push(arr2[j]);
    };

    return sortedArrays;
};

// console.log(mergeArrays([0,3,4,31], [4,6,30]));


function mergedSortedArrays(array1, array2){
    const mergedArray = [];

    let array1Item = array1[0];
    let array2Item = array2[0];

    let i = 1;
    let j = 1;

    // check for input
    if(array1.length === 0){
        return array2;
    }
    if(array2.length === 0){
        return array1;
    }

    while(array1Item || array2Item){
        console.log(array1Item, array2Item);
        
        if (!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = array2[j];
            j++
        }
    }


    return mergeArrays;
}

mergedSortedArrays([0,3,4,31], [4,6,30]);