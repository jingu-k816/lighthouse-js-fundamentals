const chorus = "Let's dance!";
let repeat = 0;
while(repeat < 10){ //runs while statement from 0 to 9 hence 10 times
  if(repeat === 5){ //if the repeat is at 5, print *change key*
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++; // increment by 1
}
console.log("Until the sun comes up!");