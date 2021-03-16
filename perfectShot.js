/* QUIZ */

//For this challenge you'll have to implement a function called finalPosition(moves), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.


//declare array of movements
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


const finalPosition = function (moves) {
  const position = [0,0]; // declare an empty array with 2 values in them to keep record of movements 
  for(const move of moves){
    if(move === "north"){
      position[1] += 1; // moving "north" means go up on a grid once
    }else if(move === "south"){
      position[1] -= 1; // moving "south" means go down once on a grid
    }else if(move === "west"){
      position[0] -= 1; // moving "west" means go one to the left on the grid
    }else if(move === "east"){
      position[0] += 1; // "east" means go one to the right on the grid
    }
  }

  return position; // returns the record of movements
}


finalPosition(moves); // calling the express function.