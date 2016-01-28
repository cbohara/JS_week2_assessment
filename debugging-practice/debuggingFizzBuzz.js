/*

fizzBuzz is a function that takes a number and:
	- if the number is divisible by 3, returns fizz
	- if the number is divisble by 5, returns buzz
	- if the number is divisbile by 3 and 5, returns fizzBuzz

Our fizzBuzz function seems to be on the fritz. Figure out what's wrong with it and make it work as expected.

var returnFizz = fizzBuzz(3);
var returnBuzz = fizzBuzz(5);
var returnFizzBuzz = fizzBuzz(15);


*/


var fizzBuzz = function(num){
	if (num % 3 === 0) {
		return 'fizz';
	} else if (num % 5 === 0) {
		return 'buzz';
	} else if (num % 5 === 0 || num % 3 === 0) {
		return 'fizzBuzz';
	}
};


