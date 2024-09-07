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

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solution(number) {
  let final = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      final += i;
    }
  }
  return final;
}
