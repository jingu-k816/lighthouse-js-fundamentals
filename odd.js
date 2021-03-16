// declare a function to calculate if the number is an even number or an odd number. returns true if the number is odd and false if the number is even.

function isOdd(num){
  if(num % 2 === 1){
    return true;
  }else {
    return false;
  }
}

//Checking if the number passed into the function isOdd is an odd number or an even number.
console.log("3 is odd: " + isOdd(3)); 
console.log("8 is odd: " + isOdd(8));