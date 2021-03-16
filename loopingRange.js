
function range(start, end, step){
  const someArray = []; // declare an empty array to store during a loop


  /*conditional statement to return an empty array if 
  1.start, end, or step being undefined 
  2.start being greater than end 
  3.step being 0, or negative*/
  if((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)){ 
    
    return [];
  }
  //for loop to push values from the parameter "start" then loop until i = parameter "end" and in steps of i = i + "step" parameter.
  for(let i = start; i <= end; i += step){
    someArray.push(i); // pushing values into someArray variable.
  }
  return someArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));