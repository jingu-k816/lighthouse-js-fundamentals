/*
CHALLENGE!

Complete the logic in the function whichSchool.

The logic should help learners decide which school they should attend. Replace the comment inside the function with your code.

The function returns one of the following strings, based on the value of age:

1.Elementary School if age is below 13
2.Secondary School if age is between 13 and 18 (both inclusive)
3.Lighthouse Labs in all other cases.

*/

const whichSchool = function(age){
  if(age < 13 && age >= 0){ // age between 0 and 13
    console.log("Age below 13 should be attending Elementary School.");
    return "Elementary School"; // returns the string value "Elementary School"
  }else if(age >= 13 && age <= 18){ // age between 13 and 18
    console.log("Age between 13 and 18 should attend Secondary School");
    return "Secondary School"; // returns the string value of "Secondary School"
  }else{
    console.log("Age above 19(including 19) should attend Lighthouse Labs!"); // else statement to show age from 19 should attend Lighthouse Labs
    return "Lighthouse Labs";
  }
}

whichSchool(15); //calling the variable with function.