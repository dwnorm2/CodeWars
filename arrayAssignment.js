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
