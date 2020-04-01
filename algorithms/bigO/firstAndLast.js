const arrayOfTweets = ["i'm sleepy", "corona sucks", "i miss the gym"];

function findFirstAndLast (arr){
  for(let i = 0; i<=arr.length; i++){
    console.log(arr[0]);
    console.log(arr[arr.length-1]);
    break
  };
};

findFirstAndLast(arrayOfTweets);