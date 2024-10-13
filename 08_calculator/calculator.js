const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let s = 0;
	for (i = 0; i < arr.length; i++){
    s += arr[i];
  }
  return s;
};

const multiply = function(arr) {
  prod = 1;
  arr.forEach(element => {
    prod *= element;
  });
  return prod;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(n) {
	let fact = 1;
  for (i = 2; i <= n; i++) fact *= i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
