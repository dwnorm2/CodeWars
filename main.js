// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
  let arr = bin.split("").reverse();
  let decimal = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      decimal += arr[i] * Math.pow(2, i);
    }
  }
  return decimal;
}
