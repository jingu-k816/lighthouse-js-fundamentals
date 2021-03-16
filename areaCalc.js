function calculateRectangleArea(length, width){
  let rectangle;
  rectangle = length * width;

  //conditional statement to validate if any of the input is less than 0 will return undefined;
  if(length < 0 || width < 0){
    return undefined;
  }
  return rectangle;
}

function calculateTriangleArea(base, height){
  let triangle;
  triangle = (base * height) / 2;

  //conditional statement to validate if any of the input is less than 0 will return undefined;
  if(base < 0 || height < 0){
    return undefined;
  }
  return triangle;
}

function calculateCircleArea(radius){
  let circle;
  circle = Math.PI * radius * radius;

  //conditional statement to validate if any of the input is less than 0 will return undefined;
  if(radius < 0){
    return undefined;
  }
  return circle;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined