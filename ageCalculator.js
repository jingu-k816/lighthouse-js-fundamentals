//function to calculate someone's age

function ageCalculator(name, yearOfBirth, currentYear){ //takes 3 parameters
  const age = currentYear - yearOfBirth; //calculate the age of the client.

  return name + " is " + age + " years old."; // returns the age along with the name of the client.
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));