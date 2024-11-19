const add = function(...nums) {
  let result = nums.reduce((total, num) => total + num);
  return result;
};

const subtract = function(...nums) {
	let result = nums.reduce((total, num) => total - num);
  return result;
};

const sum = function(nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    let result = nums.reduce((total, num) => total + num);
    return result;
  }
};

const multiply = function(nums) {
  let result = nums.reduce((total, num) => total * num);
  return result;

};

const power = function(a, b) {
	return a ** b;
};

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
