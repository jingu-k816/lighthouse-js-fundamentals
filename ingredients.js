const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0; 
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for(let j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let ingredientsBackwards = []; // create an empty array to store new sets of element in a reverse order.

for(let count = ingredients.length -1; count > -1; count--){
ingredientsBackwards.push(ingredients[count]); // pushes the elements from the last element then stores inside ingredientsBackwards array.

}
console.log(ingredientsBackwards);