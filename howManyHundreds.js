//Write a function to show the input in how many hundreds.

/*
function howManyHundreds(num){
  return Math.floor(num / 100); // returns the rounded down number.
}
*/


function howManyHundreds(num){
  return count = (num / 100) - ((num % 100) / 100); 
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);