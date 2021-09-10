let array = [
  "kosong",
  "satu",
  "dua",
  "tiga",
  "empat",
  "lima",
  "enam",
  "tujuh",
  "delapan",
  "sembilan",
];

function number(n) {
  if (n < 0) return "Cannot Count Minus Number"
  if (n >= 100) return "Cannot Process More Than Two Digit Numbers"

  let result = array.slice(1, n + 1);  

  if (n > 9) {
    let numbs = [];
    let startNumb = 10;

    for (let i = startNumb; i <= n; i++) {
      numbs.push(i);
    }

    for (let i = 0; i < numbs.length; i++) {
      result.push(array[String(numbs[i])[0]] + array[String(numbs[i])[1]]);
    }
  }

  return result;
}

let sol = number(10);
console.log(sol);
