// FUNCTION

// Function Declaration vs Function Expression

// Hoisting
// func1()

function func1() {
  // Declaration
  console.log("func 1");
}

const func2 = function () {
  // Expression
  console.log("func 2");
};

// func1();
// func2();

// ES 6
// Arrow Function
const arrow1 = () => {};

// OBJECT - key & value
const person = { name: "jihad", class: "backend", from: "mojokerto" };
const persons = [
  { name: "jihad", class: "backend", from: null },
  { name: "fariz", class: "backend", from: "jakarta" },
];

// ARRAY - index
const fruits = ["banana", "apple", "grape"];

// ERROR
// Syntax Error -> Code Salah Tulis atau Method unavailable dst.
// Runtime Error -> Runtime e.g. node/browser
// Logical Error -> Works tapi ga sesuai ekspektasi kita
// Server Error -> Server down, No internet/network dst.

function tes1() {
  solution = "jihad"

  return 1 + 1
  console.log(solution)
  console.log("tesss")
}

console.log(tes1() + 2)
