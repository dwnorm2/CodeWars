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

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter((n) => !b.includes(n));
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter((x) => x.toString() !== x);
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

function squareSum(numbers) {
  return numbers.reduce((acc, n) => acc + n ** 2, 0);
}

//test commit

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
  function toReverse(x) {
    if (x.length >= 5) {
      return x.split("").reverse().join("");
    }
    return x;
  }
  return string
    .split(" ")
    .map((x) => toReverse(x))
    .join(" ");
}
//test
