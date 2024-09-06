// refresher

// This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return a * b;
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

let evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?
// Examples (input --> output):

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString();
}
