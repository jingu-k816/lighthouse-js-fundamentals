// Write a function that takes in an array of possible voting stations and then only returns the names of the stations that are appropriate.

//MUST have capacity of 20 people or more and be a school or community centre.
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const goodStations = [];

const chooseStations = function(stations){
  
  for(const station of stations){
    if(station[1] >= 20){
      const type = station[2];

      if(type === "school" || type === "community centre"){
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
 
};

chooseStations(stations);