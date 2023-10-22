// Translate border-left-width to borderLeftWidth

function camelize(str) {
  if (str[0] !== "-") {
    return str
      .split("-")
      .map((word, i) => (i == 0 ? word : word[0].toUpperCase() + word.slice(1)))
      .join("");
  } else {
    return str
      .substring(1)
      .split("-")
      .map((word, i) => (i == 0 ? word : word[0].toUpperCase() + word.slice(1)))
      .join("");
  }
}

camelize("-webkit-transition");

//Filter range

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterRange(arr, 1, 4);

//Filter range "in place"

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 3);
console.log(arr);

// Sort in decreasing order

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((n1, n2) => n2 - n1);
console.log(arr3);

// Copy and Sort array

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

function copySorted(arr) {
  return arr.slice().sort();
}

console.log(sorted);
console.log(arr4);

// Create an extendable calculator

let calc = new Calculator();

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => a ** b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//Map to names

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
names;

//Map to objects

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
usersMapped;

//Sort users by age

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr5 = [pete2, john2, mary2];
arr5;

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr5);
arr5;

//Shuffle an array

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr6 = [1, 2, 3, 4, 5, 6, 7];
shuffle(arr6);
console.log(arr6);

//Get average age
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0 / users.length);
}

//Filter unique array members

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O

//Create keyed object from array

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
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
