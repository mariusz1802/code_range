/*
Definition:
REST:
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
*/

//*********************Rest parameter example********************************

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
//expected output: 6;

console.log(sum(1, 2, 3, 4));
//expected output: 10;

//******************Spread syntax(...) example******************************

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
//expected output: 6

console.log(sum.apply(bull, numbers));
//expected output: 6
