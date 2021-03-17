function lastIndexOf(numbers, value){
  let match = false;
 
  for(let i = numbers.length - 1; i > -1; i--){
    if(value === numbers[i]){
      match = true;
      var findNum = i;
      break;
    }
  }
  if(match){
    return findNum;
  }else{
    return -1;
  }

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

