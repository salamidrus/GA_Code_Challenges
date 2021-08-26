// RECURSION
// Base Case
// Manggil Dirinya sendiri tapi paramsnya dibedain

function factorial(n) {
  if (n == 1) return 1;

  return n * factorial(n - 1);
}

let sol = factorial(5);
// console.log(sol);

// 5, 5 * 4 * 3 * 2 * 1

// Mutable & Immutable
let arr = [1, 2, 3, 4, 5, 6, 7];

// MUTATE METHODS
arr.push(1);
arr.unshift(10);

let slicedArr = arr.slice(0, 2);
let splicedArr = arr.splice(0, 2);

// console.log(arr)
// console.log(slicedArr)
// console.log(splicedArr)

// VALUE TYPE & REFERENCE TYPE
let str = "halo";
let str2 = str;
str2 = "halo 2";

// console.log(str)
// console.log(str2)

let arrVal = [1, 2, 3];
// let arrVal2 = arrVal - REFERENCE BASED, improper way to copy an array values
// let arrVal2 = arrVal.slice()
let arrVal2 = [...arrVal];
arrVal2.push(2);

// console.log(arrVal, "--arr val")
// console.log(arrVal2, "--arr val 2")

// TRUTHY AND FALSY VALUE

// ES 6
// Arrow Function, Ternary Operator, Spread & Rest Operator

// ARROW FUNCTION
// Function expression
const arrow = (n) => {
  if (n == 1) return 1;

  return n * arrow(n - 1);
};

const arrowDirect = () => "tes";

// TERNARY OPERATOR
let isRaining = true;

isRaining ? "Ujan" : "Cerah";
// isRaining ? "Ujan" : isRaining == "Berkabut" ? "Kabut" : "Cerah";

// if (isRaining) {
//   return "Ujan";
// } else if (isRaining == "Berkabut") {
//   return "Kabut";
// } else {
//   return "Cerah";
// }

// SPREAD & REST OPERATOR
let arrSpread = [1, 2, 3, 4, 5];
let arrSp = [...arr.map((el) => el * 10), 6, 7, 8, ...arrSpread];

function randomFunc(...args) {
  // console.log(args)
}

randomFunc("jihad");

// ES 7
// Array & Object Destructuring

let [name, clas, city] = ["Fariz", "Binar", "Jakarta"];
let obj = {
  id: 1,
  nama: "jihad",
  kelas: "backend",
  from: "mojokerto",
};

let { nama, kelas, from } = obj;
// console.log(kelas);

let data = [
  {
    id: 1,
    username: "riyanto darliana",
    age: 25,
  },
  {
    id: 2,
    username: "riski",
    age: null,
  },
];

// data = {data : []}

let dataMap = data.map((item) => {
  if (item.age == null) item.age = 20;
  if (item.username.length > 5) item.username = item.username.slice(0, 4);

  return {
    ...item,
    school: "Binar",
    randomId: item.username + item.age,
  };
});

// console.log(dataMap);

// ES 2020
// Null Coalescing, Optional Chaining
let person = {
  fruit: "apple",
  age: null,
  taste: {
    flavour: "sweet",
  },
};

let ages = person.age ?? false;
// false, undefined
// console.log(ages)
console.log(person.nama?.flavour);

console.log("LANCARRRR");
