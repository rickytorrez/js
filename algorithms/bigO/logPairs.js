// log all pairs of array
// O(n^2)

const boxes = ['a','b','c','d','e'];

function logPairs(arr){
  for (let i =0; i < arr.length; i ++){
    for (let j=0; j < arr.length; j++){
      console.log(arr[i], arr[j])
    }
  }
}

logPairs(boxes);