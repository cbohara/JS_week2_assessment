/*

sumArray should take an array of numbers and return the sum of each number.

example: 

var arr = [1, 9, 7, 15];

sumArray(arr) --> 32;
*/

//create function that takes an array as an parameter
var sumArray = function(arr){
	//initialize the counter to zero
	var sum = 0;
	//loop through each index within the array and add the array index value to the sum total
	for(var i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	return sum;
};

/*

*EXTRA* build an 'add' function that takes two numbers as parameters and adds them together. Replace your add functionality inside of sumArray with your new 'add' function.
*/

//add function takes two numbers as parameters and adds them together
var add = function(num1,num2){
	return num1 + num2;
}


