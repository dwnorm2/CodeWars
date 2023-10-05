// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
  let arr = bin.split("").reverse();
  let decimal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) === 1) {
      decimal += arr[i] * Math.pow(2, i);
    }
  }
  return decimal;
}

//when you don't know about radix and parseInt()

// best solution:
function binToDec(bin) {
  return parseInt(bin, 2);
}

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

let litres = (time) => Math.floor(time * 0.5);

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

let booleanToString = (b) => b.toString();

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

let century = (year) => Math.ceil(year / 100);

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

let maps = (x) => x.map((y) => y * 2);

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let arr = name.split(" ");
  let firstName = arr[0].toUpperCase();
  let lastName = arr[1].toUpperCase();
  return `${firstName[0]}.${lastName[0]}`;
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower2 % 2 === 0 && flower1 % 2 !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

let simpleMultiplication = (number) =>
  number % 2 === 0 ? number * 8 : number * 9;

//   Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

let invert = (array) => array.map((x) => -x);

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let newArr = [0, 0];
  if (input == null || input == false) {
    return [];
  } else {
    for (let num of input) {
      if (num > 0) {
        newArr[0]++;
      } else if (num < 0) {
        newArr[1] += num;
      }
    }
    return newArr;
  }
}

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let sum = 1;
  x.forEach((num) => (sum *= num));
  return sum;
}
