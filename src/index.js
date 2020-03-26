var generate = function(numRows) {
  let result = [];
  var factorial = function(num) {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  };
  //last row
  for (let j = 0; j <= numRows; j++) {
    let arr = [];

    for (let i = 0; i <= numRows - j; i++) {
      arr.push(
        Math.round(
          factorial(numRows - j) / (factorial(i) * factorial(numRows - j - i))
        )
      );
    }
    result.unshift(arr);
  }
  result.pop();

  return result;
};

console.log(generate(0));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));
