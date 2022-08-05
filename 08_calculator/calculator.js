const add = function(a, b) {
  return a + b	;
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(...args) {
	let sum = 0;
  args[0].forEach((val) => {
    sum += val ;
  });
  return sum;
};

const multiply = function(...args){
  let mult = 1;
  args[0].forEach((val) => {
    mult *=  val ;
    //console.log(val);
  });
  return mult;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if ( num == 0) return 1;
  return num * factorial(num -1);
  
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
