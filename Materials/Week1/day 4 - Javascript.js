// Function, Conditional, Loop, Array/Object Methods

// Variable
// var, let, const
// declaration, assignment

// VAR
var var1;
var var1; // declaration
var1 = 2; // assignment

// LET
let var2;
// let var2; // cannot redeclare
var2 = 3; // assignment

// CONST
const var3 = 3;
// const var3 = 4; // cannot redeclare
// var3 = 4 // cannot re-assign

// console.log(var3);

// Strict type vs Dynamic/Loose type

let free = 0;
// console.log(typeof free)

// DATA TYPE
// string
// number
// boolean
// undefined
// null
// TODO: Truthy and Falsy Value

// OPERATORS
// +
// -
// /
// *
// %

// COMPARISON
// == ===, value and data
// !
// >, >=
// <, <=
// &&
// ||

// console.log(true && true && (false || true))
// console.log(true || false)

// CONDITIONAL
// if else

let isRain = null;
if (isRain) {
  console.log("Hujann");
} else if (isRain == null) {
  console.log("Cerah");
} else {
  console.log("Tidak Hujan");
}

// TODO: switch

// LOOPING

// for loop
// for (start; stop; step) {
//  statement
// }

for (let i = 5; i < 20; i = i + 3) {
  // console.log(i)
}

// while
let i = 0; // start

while (i < 20) {
  // stop
  console.log(i);
  i = i + 2; // step
}
