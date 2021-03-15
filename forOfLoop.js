//Traditional for loops
/*
const amount = [61.00, 52.25, 112.99, 5.00]; //array of amount of money

let total = 0; // saves the total value of amount -- need to use "let" in order to change the value of the variable "total"

for(let i = 0; i < amount.length; i++){
  total += amount[i]; //calculates the sum of amount in the array
}
console.log('Order total is: $', total); //prints out the total sum of amount

*/

const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;

for(let amount of amounts){ //declare a variable called amount to use for a variable called amounts.
  total += amount; //adds money(value) to a variable total.
}
console.log('Order total is: $', total); //Print the sum of the money(amounts variable) in the array