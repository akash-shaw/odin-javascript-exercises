const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce( (sum, item)=> sum+item, 0 );
};

const multiply = function(arr) {
  return arr.reduce( (product, item)=>product*item, 1 );
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  fact = 1;
  for(let i=2;i<=a;i++){
    fact *= i;
  }
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
