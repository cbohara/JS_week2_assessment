/*

sumArray should take an array of numbers and return the sum of each number.

example: 

var arr = [1, 9, 7, 15];

sumArray(arr) --> 32;
*/

var sumArray = function(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	return sum;
};

var arr = [1, 2, 3, 4];
debug(sumArray(arr));


/*

*EXTRA* build an 'add' function that takes two numbers as parameters and adds them together. Replace your add functionality inside of sumArray with your new 'add' function.

*/

