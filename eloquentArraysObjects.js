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
