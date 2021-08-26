// Functional Programming & Object Oriented Programming

// DRY - Do Not Repeat Yourself
// WET - Write Everything Twice

function sumFunc(a, b) {
  return a + b - (10 * 100) / 50;
}

let sum = sumFunc(2, 2);
let sum2 = sumFunc(5, 4);
let sum3 = sumFunc(6, 7);

// Function Factories
function calculator() {
  return {
    sum: (a, b) => a + b,
    divide: (a, b) => a / b,
    substract: (a,b) => a -b
  };
}

let calc1 = calculator()
console.log(calc1.substract(4,5))