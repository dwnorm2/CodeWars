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

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons) {
  return dragons <= bullets / 2 ? true : false;
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let sum = 0;
  for (let score of classPoints) {
    sum += score;
  }
  let average = sum / classPoints.length;
  return yourPoints > average ? true : false;
}

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  return x
    .split("")
    .map((y) => (y >= 5 ? 1 : 0))
    .join("");
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

let check = (a, x) => (a.includes(x) ? true : false);

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(" ");
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump / mpg <= fuelLeft ? true : false;

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reverse();
};

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

const stringToArray = (string) => string.split(" ");

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`;
  }
  return sheep;
};

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

const quarterOf = (month) =>
  month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let cost = 40 * d;
  if (d >= 7) {
    return cost - 50;
  } else if (d >= 3) {
    return cost - 20;
  }
  return cost;
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
}

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - a - b;
}

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let xTotal = 0;
  let yTotal = 0;
  let points = 0;

  for (let score of games) {
    xTotal = Number(score.charAt(0));
    yTotal = Number(score.charAt(2));
    xTotal > yTotal
      ? (points += 3)
      : xTotal == yTotal
      ? (points += 1)
      : (points += 0);
  }

  return points;
}

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function (l, w) {
  return l == w ? w * l : w * 2 + l * 2;
};

// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let sum = 0;
  for (let num of x) {
    sum += Number(num);
  }
  return sum;
}

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (!array || array.length < 2) {
    return 0;
  } else {
    let lowestNum = array[0];
    let highestNum = array[0];
    let sum = 0;
    for (let num of array) {
      if (num < lowestNum) {
        lowestNum = num;
      }
      if (num > highestNum) {
        highestNum = num;
      }
      sum += num;
    }
    return sum - lowestNum - highestNum;
  }
}

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for (let num of arr1) {
    sum += num;
  }
  for (let num of arr2) {
    sum += num;
  }
  return sum;
}

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)
    ? true
    : false;
}

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

let getAge = (inputString) => parseInt(inputString);

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";

    case 1:
      return "One";

    case 2:
      return "Two";

    case 3:
      return "Three";

    case 4:
      return "Four";

    case 5:
      return "Five";

    case 6:
      return "Six";

    case 7:
      return "Seven";

    case 8:
      return "Eight";

    case 9:
      return "Nine";
  }
}

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor(base, factor) {
  return base % factor === 0;
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

let reverseWords = (str) => str.split(" ").reverse().join(" ");

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
  let sum = marks.reduce((sum, x) => sum + x);
  return Math.floor(sum / marks.length);
}

// Now you have to write a function that takes an argument and returns the square of it.

let square = (num) => num ** 2;

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
  }

  return name;
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  return arr.filter((element, i) => i % 2 == 0);
}

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

function enough(cap, on, wait) {
  return cap - on > wait ? 0 : wait - (cap - on);
}

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 != arr[i - 1]) {
      return arr[i];
    }
  }
  return null;
}

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`;
}

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

function move(position, roll) {
  return position + roll * 2;
}

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

function strCount(str, letter) {
  let arr = str.split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == letter) {
      result++;
    }
  }
  return result;
}

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  return n % 2 == 0;
}

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let arr = [];
  for (let i = a; a <= b; a++) {
    arr.push(a);
  }
  return arr;
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// String.prototype.toAlternatingCase = function () {
//   let arr = this.split("");
//   let altArr = [];
//   altArr = arr.map((x) =>
//     x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()
//   );
//   return altArr.join("");
// };

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((x) => (x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()))
    .join("");
};

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// function correct(string) {
//   let arr = string.split("");
//   function charRec(x) {
//     if (x == 5) {
//       return (x = "S");
//     } else if (x == "0") {
//       return (x = "O");
//     } else if (x == 1) {
//       return (x = "I");
//     }
//     return x;
//   }
//   return arr.map(charRec).join("");
// }

function correct(string) {
  return string.replaceAll(0, "O").replaceAll(1, "I").replaceAll(5, "S");
}

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
  return Math.max(
    a * b * c,
    a + b + c,
    a * b + c,
    (a + b) * c,
    a * (b + c),
    a + b * c,
    a + b * c,
    a * b + c
  );
}

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

function finalGrade(exam, projects) {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
}

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

const isPalindrome = (x) =>
  x.toLowerCase() == x.toLowerCase().split("").reverse().join("");

// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  let volA = 1;
  let volB = 1;
  for (let x of a) {
    volA *= x;
  }
  for (let x of b) {
    volB *= x;
  }
  return volA > volB ? volA - volB : volB - volA;
}

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  let dogYears = 15;
  let catYears = 15;

  if (humanYears >= 2) {
    dogYears += 9;
    catYears += 9;
  }

  if (humanYears >= 3) {
    dogYears += (humanYears - 2) * 5;
    catYears += (humanYears - 2) * 4;
  }

  let solution = [humanYears, catYears, dogYears];
  return solution;
};

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {
  let data = [
    "english",
    "Welcome",
    "czech",
    "Vitejte",
    "danish",
    "Velkomst",
    "dutch",
    "Welkom",
    "estonian",
    "Tere tulemast",
    "finnish",
    "Tervetuloa",
    "flemish",
    "Welgekomen",
    "french",
    "Bienvenue",
    "german",
    "Willkommen",
    "irish",
    "Failte",
    "italian",
    "Benvenuto",
    "latvian",
    "Gaidits",
    "lithuanian",
    "Laukiamas",
    "polish",
    "Witamy",
    "spanish",
    "Bienvenido",
    "swedish",
    "Valkommen",
    "welsh",
    "Croeso",
  ];
  for (let i = 0; i < data.length; i++) {
    if (data[i] == language) {
      return data[i + 1];
    }
  }
  return data[1];
}

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse();
}

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  let choices = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return choices[(nbPetals - 1) % 6];
}

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

let twoSort = (s) => s.sort()[0].split("").join("***");

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = 1; i <= limit / integer; i++) {
    arr.push(integer * i);
  }
  return arr;
}

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
  return string.replaceAll(/a|e|i|o|u/g, "");
}

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
}

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((x) => !geese.includes(x));
}

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function getRealFloor(n) {
  return n >= 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

function getChar(n) {
  return String.fromCharCode(n);
}

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {
  return a !== b;
}

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
  return n !== 1;
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return str
    .split("")
    .reduce(
      (total, char) =>
        char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
          ? total + 1
          : total + 0,
      0
    );
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/a|e|i|o|u|A|E|I|O|U/g, "");
}

//or

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
// Happy Coding!

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((num) => num ** 2)
    .join("");
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// In JavaScript, your code is running in a function, let us step by step complete your first JS function.

// Look at this example:

//       --------keyword "function"
//       |       ----your function name
//       |       |    ---if needed, some arguments will appear in parentheses
//       |       |    |
//     function myfunc(){  ---------your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"
// If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

// function printWordToScreen(){
//   var somewords="This is an example."
//   console.log(somewords)
// }
// If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method. You will use it a lot!

// Task
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line (don't forget to put the str in the parentheses).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function helloWorld() {
  let str = "Hello World!";
  console.log(str);
}

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function (n) {
  for (let i = 0; i <= n; i++) {
    if (n == i * i) {
      return true;
    }
  }
  return false;
};

//or

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

function saleHotdogs(n) {
  return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;
}

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

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter((x) => Number.isInteger(x));
}

// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

function addFive(num) {
  var total = num + 5;
  return total;
}

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

let getMiddle = (s) =>
  s.length % 2 !== 0
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];

//     An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      return false;
    }
    newArr.push(arr[i]);
  }
  return true;
}

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers) {
  let arr = [numbers[0]];
  let lastNum = numbers[numbers.length - 1];
  for (let i = 0; i < lastNum - numbers[0]; i++) {
    arr.push(arr[i] + 1);
  }
  return arr;
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

let XO = (str) =>
  str.toLowerCase().split("o").length == str.toLowerCase().split("x").length;

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let findShort = (s) => Math.min(...s.split(" ").map((x) => x.length));

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let x = 0; x <= i; x++) {
      if (x === 0) {
        arr.push(s[i].toUpperCase());
      } else arr.push(s[i].toLowerCase());
    }
    arr.push("-");
  }
  arr.pop();
  return arr.join("");
}

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
  return table;
}

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  return dna
    .split("")
    .map((x) => (x == "A" ? "T" : x == "T" ? "A" : x == "C" ? "G" : "C"))
    .join("");
}

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

var Ball = function (ballType) {
  this.ballType = ballType ? ballType : "regular";
};

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((total, x) => total + x, 0);
}

// You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

//     If the input is 'H', return 'Hello World!'
//     If the input is 'Q', return the input
//     If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.

//     For everything else, don't return anything (return null in C#, None in Rust, and "" in Haskell).

// (+ has no visible effects so we can safely ignore it.)

function HQ9(code) {
  return code == "H"
    ? "Hello World!"
    : code == "Q"
    ? code
    : code == "9"
    ? "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
    : undefined;
}

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// Note: keep the original order of the names in the output.

function friend(friends) {
  return friends.filter((x) => x.length == 4);
}

// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
  return ([a] + "," + [b])
    .split(",")
    .filter((n) => n)
    .sort((a, b) => a - b)
    .map((x) => Number(x))
    .filter((e, i, a) => e !== a[i - 1]);
}

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
  return a.filter((x, i) => a.indexOf(x) === i);
}

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// Examples (input -> output)

// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
  return arr1
    .concat(arr2)
    .sort((a, b) => a - b)
    .filter((e, i, a) => e !== a[i - 1]);
}

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

function unusualFive() {
  return ["a", "a", "a", "a", "a"].length;
}

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

let problem = (x) => (typeof x == "number" ? x * 50 + 6 : "Error");

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.
// Examples

// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
  let i = queue.reverse().indexOf("wolf");
  return i > 0
    ? `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    : "Pls go away and stop eating my sheep";
}

//   The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  return sperm.includes("Y")
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

// Task Overview

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

let toBinary = (n) => +n.toString(2);

// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

// This is a modification on the Kata: Array2Binary addition hope you like it

function arr2bin(arr) {
  return arr
    .reduce((sum, num) => sum + (typeof num == "number" ? num : 0), 0)
    .toString(2);
}

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

function mouthSize(animal) {
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
}

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let goods = [];
  for (let y of x) {
    if (y == "good") {
      goods.push(y);
    }
  }
  return goods.length > 2
    ? "I smell a series!"
    : goods.length > 0
    ? "Publish!"
    : "Fail!";
}

//   The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}

// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.
// Example:

// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

let _if = (bool, func1, func2) => (bool ? func1() : func2());

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
  return str.split(" ").map((x) => `${x} ${x.length}`);
}

// Find Mean

// Find the mean (average) of a list of numbers in an array.
// Information

// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16

// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4

// 3. The mean (or average) of this list is 4

var findAverage = function (nums) {
  return nums.reduce((sum, x) => sum + x) / nums.length;
};

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
  return parseFloat(s) == s;
}

function sumMul(n, m) {
  let sum = 0;
  if (m > 0 && n > 0) {
    for (let i = 1; i < m / n; i++) {
      sum += i * n;
    }
    return sum;
  } else {
    return "INVALID";
  }
}

// Your Job

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
  let sum = 0;
  if (m > 0 && n > 0) {
    for (let i = 1; i < m / n; i++) {
      sum += i * n;
    }
    return sum;
  } else {
    return "INVALID";
  }
}

// Task

// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.
// Examples

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Notes

//     "flick" will always be given in lowercase.
//     A list may contain multiple flicks.
//     Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr) {
  let value = true;
  return arr.map((x) => (x == "flick" ? (value = !value) : value));
}

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal(string) {
  return string.split("").reduce((a, b) => a + b.charCodeAt(), 0);
}

// Check your arrows
// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.

// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])

// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.

function anyArrows(arrows) {
  return arrows.some((a) => !a.damaged);
}

// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

function addExtra(listOfNumbers) {
  return [...listOfNumbers, "bob"];
}

// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

// minimum age <= your age <= maximum age
// Task

// Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age

// You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

// ##Examples:

// age = 27   =>   20-40
// age = 5    =>   4-5
// age = 17   =>   15-20

function datingRange(age) {
  return age <= 14
    ? `${Math.floor(age - 0.1 * age)}-${Math.floor(age + 0.1 * age)}`
    : `${Math.floor(age / 2 + 7)}-${Math.floor((age - 7) * 2)}`;
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.endsWith(ending);
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  let arr = [a, b].sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

let addBinary = (a, b) => (a + b).toString(2);

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (var i in pin) {
    if (pin[i] > "9" || pin[i] < "0") {
      return false;
    }
  }
  return true;
}

function hello(name) {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"
  }!`;
}

// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// Grasshopper - Function syntax debugging

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main(verb, noun) {
  return verb + "" + noun;
}

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  while (n % 10 == 0 && n !== 0) {
    n /= 10;
  }
  return n;
}

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  let newHealth = health - damage;
  return newHealth >= 0 ? newHealth : 0;
}

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(str) {
  if (str.endsWith("!")) {
    str = str.slice(0, -1);
  }
  return str;
}

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n);
}

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let arr = [...s1, ...s2];
  return arr
    .sort()
    .filter((x, i) => arr[i] !== arr[i - 1])
    .join("");
}

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return n ** 3;
}

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note:

//     Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//     There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

function nbYear(p0, percent, aug, p) {
  let population = p0;
  let i = 0;
  while (population < p) {
    population += Math.floor(population * (percent * 0.01) + aug);
    i++;
  }
  return i;
}

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

function openOrSenior(data) {
  return data.map((app) => (app[0] >= 55 && app[1] > 7 ? "Senior" : "Open"));
}

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

let findNextSquare = (sq) =>
  Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.
// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  let errors = [
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let filtered = s.split("").filter((char) => errors.includes(char));
  return `${filtered.length}/${s.length}`;
}

// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  return s.replaceAll(/a|e|i|o|u/gi, "!");
}

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  return busStops.reduce((total, [on, off]) => total + on - off, 0);
};

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
}

// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  let sum = array.reduce((total, x) => total + x, 0);
  return sum % 2 == 0 ? "even" : "odd";
}

// Story

// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Remarks

// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let sum = 0;
  let x = 1;
  for (let i = 0; i < n; i++) {
    sum += 1 / x;
    x += 3;
  }
  return sum.toFixed(2);
}

// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((num, index) => index !== indexOfMin);
}

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((total, num) => total + Number(num), 0);
}

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
  return sentence.toLowerCase().includes("english");
}

// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

var templateStrings = function (noun, adjective) {
  return `${noun} are ${adjective}`;
};

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      arr.splice(i, 0, " ");
      i++;
    }
  }
  return arr.join("");
}

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m) {
  return n > m ? n % m : m % n;
}

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

function rainAmount(mm) {
  if (mm < 40) {
    return "You need to give your plant " + `${40 - mm}` + "mm of water";
  }
  return "Your plant has had more than enough water for today!";
}

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!

function calculateAge(birthYear, futureYear) {
  let age = futureYear - birthYear;
  if (age < 0) {
    return `You will be born in ${Math.abs(age)} year${age == -1 ? "" : "s"}.`;
  } else if (age == 0) {
    return `You were born this very year!`;
  } else {
    return `You are ${age} year${age == 1 ? "" : "s"} old.`;
  }
}

// In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

// Numbers can use operators such as + - * / %
// Task

// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v4, //set number value to a
    b = v2; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v6, //set number value to a
    b = v3; //set number value to b
  return a % b;
}

// As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

// Lynn: Alan, there’s that teacher chap.
// Alan: Michael, if he hits me, will you hit him first?
// Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
// Alan: Yeah, chicken stock.
// Phil: Hello Alan.
// Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
// Lynn: What do you mean?
// Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.

// Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.
// Task

// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function (array) {
  return array.map((elem, i) => `${i + 1}: ${elem}`);
};

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.
// Examples (input --> output)

// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

function getDivisorsCnt(n) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      counter++;
    }
  }
  return counter;
}

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Examples

// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price) {
  let buy = 0;
  for (let i = 1; i <= quantity; i++) {
    if (i % 3 !== 0) {
      buy++;
    }
  }
  return buy * price;
}

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕

function printArray(array) {
  return array.join(",");
}

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!

function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];
  return number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number == 101
    ? dogs[3]
    : dogs[2];
}

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
  return string.split(",").length > 2
    ? string.split(",").slice(1, -1).join(" ")
    : null;
}

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.
// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char) {
  return text
    .split("")
    .map((x) => char)
    .join("");
}

// Fix My Phone Numbers

// Oh thank goodness you're here! The last intern has completely ruined everything!

// All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!
// The Format

// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.
// The Task

// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

function isItANum(str) {
  let nums = str
    .split("")
    .filter((x) => +x >= 0 && x !== " ")
    .join("");

  return nums.length == 11 && nums[0] == 0 ? nums : "Not a phone number";
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  return +numbers.filter((x, i, arr) => arr.indexOf(x) == arr.lastIndexOf(x));
}

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Try to do it without using if statements!

function arithmetic(a, b, operator) {
  return operator == "add"
    ? a + b
    : operator == "subtract"
    ? a - b
    : operator == "multiply"
    ? a * b
    : a / b;
}

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// Happy coding!

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => a - b)
    .reverse()
    .reduce((total, num, i, arr) => {
      if (i !== arr.length - 1) {
        return total + num - arr[i + 1];
      } else {
        return total;
      }
    }, 0);
}

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  if (numPill == 1) {
    return 0;
  } else {
    return dist * (numPill - 1) * 100 + width * (numPill - 2);
  }
}

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`;
}

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;

// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// Expect large Inputs!

function oddCount(n) {
  return Math.floor(n / 2);
}

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples (input --> output):

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {
  return cc
    .split("")
    .slice(0, -4)
    .map((num) => "#")
    .concat(cc.split("").slice(-4))
    .join("");
}

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  let divs = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      divs.push(i);
    }
  }
  return divs.length > 0 ? divs : `${integer} is prime`;
}

// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

function breakChocolate(n, m) {
  let breaks = n * m - 1;
  return breaks > 0 ? breaks : 0;
}

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
  let num = 0;
  arr = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 !== 0) {
        return arr[i];
      }
    }
  }
}

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.
// Examples:

// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  let squares = "";
  for (let i = 0; i <= n; i++) {
    squares += i ** 2;
  }
  return squares.split("").filter((x) => x == d).length;
}

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
  return s
    .split("")
    .filter((x) => x != parseInt(x))
    .join("");
}

// Theoretical Material

// You are given two vectors starting from the origin (x=0, y=0) with coordinates (x1,y1) and (x2,y2). Your task is to find out if these vectors are collinear. Collinear vectors are vectors that lie on the same straight line. They can be directed in the same or opposite directions. One vector can be obtained from another by multiplying it by a certain number. In terms of coordinates, vectors (x1, y1) and (x2, y2) are collinear if (x1, y1) = (k*x2, k*y2) , where k is any number acting as a coefficient.

// For more information, check out this article on collinearity.
// Problem Description

// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

// all coordinates are integers
// -1000 <= any coordinate <= 1000

// Notes

//     All vectors start from the origin (x=0, y=0).
//     Be careful when handling cases where x1, x2, y1, or y2 are zero to avoid division by zero errors.
//     A vector with coordinates (0, 0) is collinear to all vectors.

// Examples

// (1,1,1,1) ➞ true
// (1,2,2,4) ➞ true
// (1,1,6,1) ➞ false
// (1,2,-1,-2) ➞ true
// (1,2,1,-2) ➞ false
// (4,0,11,0) ➞ true
// (0,1,6,0) ➞ false
// (4,4,0,4) ➞ false
// (0,0,0,0) ➞ true
// (0,0,1,0) ➞ true
// (5,7,0,0) ➞ true

function collinearity(x1, y1, x2, y2) {
  return x1 * y2 === x2 * y1;
}

// Description:

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

var cubeChecker = function (volume, side) {
  return volume % side == 0 && volume >= 0 && side >= 0 && side ** 3 === volume;
};

// n javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..

// String can use operators +, Connect two or more strings together.
// Task

// misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

// If everything is right, click "Submit" again to submit your code pass this kata.I

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(5, 0, " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}

function createPhoneNumber(numbers) {
  let format = "(###) ###-####";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("#", numbers[i]);
  }
  return format;
}

// Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function dontGiveMeFive(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      sum++;
    }
  }
  return sum;
}

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor) {
  return numbers.filter((num) => num % divisor == 0);
}

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function (test, original) {
  test = test.toLowerCase().split("").sort().join("");
  original = original.toLowerCase().split("").sort().join("");
  return test == original;
};

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  let i = begin;
  while (i <= end) {
    sum += i;
    i += step;
  }
  return sum;
};

// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00

// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
  let current = principal;
  let years = 0;
  for (let i = 0; current < desired; i++) {
    current += current * interest - current * interest * tax;
    console.log(current);
    years++;
  }
  return years;
}

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12.");
  }

  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
}

// Instructions

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
  return word
    .split("")
    .map((x, i) => {
      if (x == x.toUpperCase()) {
        return i;
      }
    })
    .filter((x) => x == +x);
};

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  return a.filter((x) => x > limit).length ? false : true;
}

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
  return (n - 2) * 180;
}

// TODO: Error message when convert is pressed and < 2 cryptos are selected

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function reverseLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  return str
    .split("")
    .filter((x) => letters.includes(x))
    .reverse()
    .join("");
}

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++;
  }
  return n;
}

// Task

// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :

//     N is divisible by divisor

//     N is less than or equal to bound

//     N is greater than 0.

// Notes

//     The parameters (divisor, bound) passed to the function are only positive values .
//     It's guaranteed that a divisor is Found .

// Input >> Output Examples

// divisor = 2, bound = 7 ==> return (6)

// Explanation:

// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// divisor = 10, bound = 50 ==> return (50)

// Explanation:

// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

// divisor = 37, bound = 200 ==> return (185)

// Explanation:

// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

let noOdds = (values) => values.filter((x) => x % 2 == 0);

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s) {
  return [
    s
      .split("")
      .map(function (x, i) {
        return i % 2 == 0 ? x.toUpperCase() : x;
      })
      .join(""),
    s
      .split("")
      .map(function (x, i) {
        return i % 2 !== 0 ? x.toUpperCase() : x;
      })
      .join(""),
  ];
}

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;
  let arr = s.split("");

  for (let l of arr) {
    l == l.toUpperCase() ? upperCount++ : lowerCount++;
  }

  return (
    upperCount > lowerCount
      ? arr.map((l) => l.toUpperCase())
      : arr.map((l) => l.toLowerCase())
  ).join("");
}

// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == a && arr[i - 1] == b) || (arr[i] == a && arr[i + 1] == b)) {
      return true;
    }
  }
  return false;
}

// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Example:

// a=[1,2,0,3]
// a.length-1=3
// a includes [0,3] ,hence the function should return true

function isAllPossibilities(x) {
  let sorted = x.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i !== sorted[i]) {
      return false;
    }
  }
  if (x.includes(0) && x.includes(x.length - 1)) {
    return true;
  }
  return false;
}

// Introduction

// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26

// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20

// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

//    s  c  o  u  t
//   19  3 15 21 20
//  + 1  9  3  9  1
//  ---------------
//   20 12 18 30 21

//    m  a  s  t  e  r  p  i  e  c  e
//   13  1 19 20  5 18 16  9  5  3  5
// +  1  9  3  9  1  9  3  9  1  9  3
//   --------------------------------
//   14 10 22 29  6 27 19 18  6  12 8

// Task

// Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.
// Input / Output

// The code is a array of positive integers.
// The key input is a nonnegative integer.
// Example

// decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
// decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"

function decode(code, n) {
  let key = n.toString().split("");
  let counter = 0;
  for (let i = 0; i < code.length; i++) {
    code[i] -= key[counter];
    counter++;
    if (counter == key.length) {
      counter = 0;
    }
  }
  return code.map((n) => String.fromCharCode(n + 64).toLowerCase()).join("");
}

// Are the numbers in order?

// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

function inAscOrder(arr) {
  let sorts = [...arr];
  return arr == sorts.sort((a, b) => a - b).join(",");
}

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    !array2[i]
      ? (score += 0)
      : array1[i] == array2[i]
      ? (score += 4)
      : (score -= 1);
  }
  return score > 0 ? score : 0;
}

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

function flattenAndSort(array) {
  let arr = [];
  for (let arrays of array) {
    for (let num of arrays) {
      arr.push(num);
    }
  }
  return arr.sort((a, b) => a - b);
}

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (firstAttacker == fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        break;
      }
      fighter1.health -= fighter2.damagePerAttack;
    } else if (firstAttacker == fighter2.name) {
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        break;
      }
      fighter2.health -= fighter1.damagePerAttack;
    }
  }
  return fighter1.health <= 0 ? fighter2.name : fighter1.name;
}

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => n % 2 == 0);
}

// Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:

//     Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//     Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)

// Explanation:

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)

// Explanation:

// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

// Explanation:

// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

function minValue(values) {
  return +values
    .filter((x, i, arr) => arr.indexOf(x) == i)
    .sort((a, b) => a - b)
    .join("");
}

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

//     If the value is a multiple of 3: use the value "Fizz" instead
//     If the value is a multiple of 5: use the value "Buzz" instead
//     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.map((n) =>
    n % 15 == 0 ? "FizzBuzz" : n % 5 == 0 ? "Buzz" : n % 3 == 0 ? "Fizz" : n
  );
}

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  let x = 1;
  for (n; n > 0; n--) {
    x *= n;
    console.log(n);
  }
  return x;
}

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(...arr[i]);
  }

  return sum;
}

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

//     a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.
// Examples

// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false

// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n) {
  return Math.log2(n) % 1 == 0;
}

// Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes

//     Array size is at least 1.
//     All numbers will be positive.
//     Input >> Output Examples

// rowWeights([13, 27, 49])  ==>  return (62, 27)

// Explanation:

// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

// Explanation:

// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)

// Explanation:

// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array) {
  let weights = [0, 0];
  for (let i = 0; i < array.length; i++) {
    i % 2 == 0 ? (weights[0] += array[i]) : (weights[1] += array[i]);
  }
  return weights;
}

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.

// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      [...arguments]
        .map((age) => Math.pow(age, 2))
        .reduce((acc, age) => acc + age, 0)
    ) / 2
  );
}

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};

// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:

// Input:

// > 6

// Output:

//     0+1+2+3+4+5+6 = 21

// Input:

// > -15

// Output:

//     -15<0

// Input:

// > 0

// Output:

//     0=0

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let sum = 0;
    let string = "";
    for (let i = 0; i <= count; i++) {
      sum += i;
      string += `${i}+`;
    }
    return count == 0
      ? "0=0"
      : count < 0
      ? `${count}<0`
      : `${string.slice(0, -1)} = ${sum}`;
  };

  return SequenceSum;
})();

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }

  return sum;
}

// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let sorted = array.slice().sort((a, b) => a - b);
  let descSorted = array.slice().sort((a, b) => b - a);
  if (array.join("") == sorted.join("")) {
    return "yes, ascending";
  } else if (array.join("") == descSorted.join("")) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  return arr.includes(item);
}

// Unfinished Loop - Bug Fixing #1

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; ) {
    newArray.push(counter);
    counter++;
  }

  return newArray;
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

//     The length of string is not always the same as the number of characters

// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b) {
  let arr = [a, b].sort((a, b) => a.length - b.length);
  return arr[0] + arr[1] + arr[0];
}

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let string = "";
  for (let i = 1; i <= size; i++) {
    string += i % 2 == 0 ? "0" : "1";
  }
  return string;
}

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

// The input will not be 0.

function nthEven(n) {
  return n * 2 - 2;
}

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+

// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
// Examples (input -> output:

// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip = (d, a) => {
  if (d == "R") {
    a.sort((x, y) => x - y);
  } else {
    a.sort((x, y) => y - x);
  }
  return a;
};

// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b) {
  if (
    a.toLowerCase() == a.toUpperCase() ||
    b.toLowerCase() == b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a.toLowerCase() == a && b.toLowerCase() == b) ||
    (a.toUpperCase() == a && b.toUpperCase() == b)
  ) {
    return 1;
  } else {
    return 0;
  }
}

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  return array.map((n) => (Math.sqrt(n) % 1 == 0 ? Math.sqrt(n) : n ** 2));
}

// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}

// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")

// Task

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}

// and return a string like this:

// "This white dog has 4 legs."

// When you have finished the work, click "Run Tests" to see if your code is working properly.terminal

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(array) {
  return array.filter((n, i) => n % i == 0 || n == 0);
}

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.
// Task

// Fix the bug so we can all go home early.
// Notes

// String str will never be null.

var replaceDots = function (str) {
  return str.replaceAll(".", "-");
};

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);

  return sub == tail ? true : false;
}

// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
// Examples

// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]

// Note

//     start < stop
//     step > 0

function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

// Debug celsius converter

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)

// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c <= 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10

// Good luck! Your team knows they can count on you!

let formatMoney = (amount) => `$${amount.toFixed(2)}`;

// This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results = { sanity: "Hello" };
  return results;
}

// Task

// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
// Example

// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96.

// Here is what the theater looks like:

// Input/Output

//     [input] integer nCols

//     An integer, the number of theater's columns.

//     Constraints: 1 ≤ nCols ≤ 1000.

//     [input] integer nRows

//     An integer, the number of theater's rows.

//     Constraints: 1 ≤ nRows ≤ 1000.

//     [input] integer col

//     An integer, the column number of your own seat (with the rightmost column having index 1).

//     Constraints: 1 ≤ col ≤ nCols.

//     [input] integer row

// An integer, the row number of your own seat (with the front row having index 1).

// Constraints: 1 ≤ row ≤ nRows.

//     [output] an integer

// The number of people who sit strictly behind you and in your column or to the left.

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row);
}

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues() {
  arguments[0].reverse();
}

// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

// Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  if (name == "Santa Claus" && password == "Ho Ho Ho!") {
    return true;
  } else {
    return false;
  }
};

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)

// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7"
// derive(5, 9) --> this should output "45x^8"

// Notes:

//     The output of this function should be a string
//     The exponent will never be 1, and neither number will ever be 0

function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

function nearestSq(n) {
  if (Math.sqrt(n) % 1 == 0) {
    return n;
  }
  let higherSquare;
  let lowerSquare;

  for (let i = n; Math.sqrt(i) % 1 !== 0; i++) {
    higherSquare = i + 1;
  }

  for (let i = n; Math.sqrt(i) % 1 !== 0; i--) {
    lowerSquare = i - 1;
  }

  return higherSquare - n < n - lowerSquare ? higherSquare : lowerSquare;
}

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

// add the value "codewars" to the websites array 1,000 times
var websites = [];
for (let i = 0; i < 1000; i++) {
  websites.push("codewars");
}
