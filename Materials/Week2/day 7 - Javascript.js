// Array Method (forEach, filter, map, reduce)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// FOR LOOP
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i], "index", i);
}

// FOR OF - Jika pengen looping valuenya aja
for (let value of arr) {
  // console.log(value)
}

// FOR EACH
arr.forEach((el) => console.log(el));

// FILTER
let filteredArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 2 && arr[i] < 5) {
    filteredArr.push(arr[i]);
  }
}
// console.log(filteredArr)

// let filteredArr2 = arr.filter((el) => { return el > 2 && el < 5 }); // explicit return
let filteredArr2 = arr.filter((el) => el > 2 && el < 5); // implicit return
// let filteredArr2 = arr.filter((el) => el > 2 && el < 5).map(el => el * 100) // Chaining filter & map
// console.log(filteredArr2);

// MAP
let mappedArr = [];
for (let i = 0; i < arr.length; i++) {
  mappedArr.push(arr[i] * 10);
}
// console.log(mappedArr)

let mappedArr2 = arr.map((el) => el * 10);
// console.log(mappedArr2);

// CASES
let numbers = [10, 25, 1000, 5, 6, 8, 9, 10, 2, 10, null, undefined, false];
let cleanNumbers = numbers.filter((el) => el);
// console.log(cleanNumbers)

// Akses nilai index 5 to end - filter
// Kaliin semua nilai dengan 100 - map
// Semua nilai yang dibawah 10 dibagi 2 - filter & map
