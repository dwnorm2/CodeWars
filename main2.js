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

function solution(number) {
  return number < 0
    ? 0
    : [...new Array(number).keys()].reduce(
        (acc, x) => (x % 3 == 0 || x % 5 == 0 ? (acc += x) : (acc += 0)),
        0
      );
}

function solution(number) {
  return number < 0
    ? 0
    : [...new Array(number).keys()]
        .filter((x) => x % 3 == 0 || x % 5 == 0)
        .reduce((acc, x) => acc + x, 0);
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((x) => vowels.includes(x)).length;
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let arr = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((x) => !arr.includes(x.toLowerCase()))
    .join("");
}

function disemvowel(str) {
  let vowels = "aeiou";
  return str
    .split("")
    .filter((x) => !vowels.includes(x.toLowerCase()))
    .join("");
}

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join("");
}

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return -number;
}

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  let length = names.length;
  if (length == 0) {
    return "no one likes this";
  } else if (length == 1) {
    return `${names[0]} likes this`;
  } else if (length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  let number = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    number = number.replace("x", numbers[i]);
  }

  return number;
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num) {
  return +String(num)
    .split("")
    .map((n) => n ** 2)
    .join("");
}

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.reduce((x, y) => x + (y > 0 ? y : 0), 0);
}

//test

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}
