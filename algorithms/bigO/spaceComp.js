function boooo(inp){
  for(let i=0; i<inp.length; i++){
    console.log('boooooo!')
  }
}

boooo([1,2,3,4,5]);
// time comp: O(n)
// space comp: O(1)

function arrayOfHinTimes(n){
  let hiArr = [];
  for(let i=0; i<n; i++){
    hiArr[i] = 'hi'
  }
  return hiArr;
}

arrayOfHinTimes(6); 
// space comp O(n) -> creates a new data structure and adding memory
// each item is an additional memory space in our computer