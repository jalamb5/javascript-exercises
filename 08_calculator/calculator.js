const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
  return one - two;
};

const sum = function(array) {
  let value = 0;
	for (i = 0; i < array.length; i++) {
    value = add(value, array[i]);
  }
  return value;
};

const multiply = function(array) {
  let value = 1;
  for (i = 0; i < array.length; i++) {
    value = value * array[i];
  }
  return value;
};

const power = function(one, two) {
	return one ** two;
};

const factorial = function(num) {
  let array = []
	for (i = num; i > 0; i--) {
    array.push(i);
  }
  return multiply(array);
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
