// The sum of a range (bonus assignment included)

function range(n1, n2, range) {
  let arr = [];
  if (range < 0) {
    for (let i = n1; i >= n2; i += range) {
      arr.push(i);
    }
  } else if (range > 0) {
    for (let i = n1; i <= n2; i += range) {
      arr.push(i);
    }
  } else {
    for (let i = n1; i <= n2; i++) {
      arr.push(i);
    }
  }
  return arr;
}

range(30, 10, -3);
sum(1, 10);

function sum(n1, n2) {
  let sum = 0;
  let arr = range(n1, n2);
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

//////////////////////////////////////////

//Reversing An Array
let arr = ["A", "B", "C", "D"];

function reverseArray(arr) {
  let revArr = [];
  for (let elem of arr) {
    revArr.unshift(elem);
  }
  return revArr;
}

//Reverse In Place

reverseInPlace(arr);

//figure out why this works...

function reverseInPlace(array) {
  let swap = function (i, j) {
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  };
  for (let i = 0; i < array.length / 2; i++) {
    swap(i, array.length - i - 1);
  }
  return array;
}

//////////////////////////////////////////

//A List

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

//////////////////////////////////////////

//Deep Comparison

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
