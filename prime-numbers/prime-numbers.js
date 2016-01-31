/*
*Create a function, isPrime, that takes a number and returns true as to whether it's a prime number or not.
		*You should have ample pseudocode
		*We will be grading on style so make sure your code is indented.

1.Define the rules of the problem 
	-determine if the input value is a prime number
	-a prime number is a whole non-negative number greater than 1 that can be divided evenly only by itself or 1
	-a value is not a prime number if it can be divided by other values and have a remainder of zero
2.Determine inputs and outputs
	input: number to be determined if prime or not
	output: prime number evaluates to true, non-prime to false
3.Explore the problem and discover techniques or patterns that might be useful
	-what algorthims are already out there to determine if a number is prime or not?
	-does JS have a built in function?
4.Generate a simple plan that should solve the problem
	-divide input value by a series of other values
	-if input value divided by other values has a remainder of 0, then it is not a prime number
	-if input value divided by other values does not have a remainder of 0, then it is a prime number
5.Turn that plan into steps- put your pseudocode skills to use!

example: 

isPrime(13) --> true;
isPrime(15) --> false;
*/

//create function that will determine if a input number is prime or not
var isPrime = function(value){
	//create a for loop to generate values to divide by our input number
	//initalize for loop to start at 2 because a prime number is defined as a natural number greater than 1
	//evaluate condition of initial value for all increments of natural numbers up to but not included the input value because any input value divided by itself will have a remainder of zero, whether or not it is prime
	for (var i = 2; i < value; i++){
		//if the input value can be divided by another value and have a remainder of zero, then it is not a prime number
		if(value % i === 0){	
			return false;
		}
	}
	//a prime number must be a whole non-negative number
	if(value <= 1){
		return 'Prime numbers must be whole non-negative numbers';
	}
	//if the input value can only be evenly divided by itself and 1, then it is a prime number
	else{
		return true;
	}
};

/*
*EXTRA* expand your isPrime to an isPrimeArray function to loop through an array of numbers, collect the prime numbers, and return them to the user. If there are no prime numbers in the array, isPrimeArray returns 'there are no primes';

var primeArray = [7, 14, 27, 671]; 

var nonPrimeArray = [9, 15, 20]

isPrimeArray(primeArray); ---> [7];
isPrimeArray(nonPrimeArray) ---> 'there are no primes';

*/

var isPrimeArray = function(array){
	//initialize array that will hold prime numbers from input array
	var resultsArray = [];
	//loop through input array
	for(var i = 0; i < array.length; i++){
		//use isPrime function to determine if given value in array is prime
		//if prime, collect the number and return in results array
		if(isPrime(array[i])){
			resultsArray.push(array[i]);
		}
	}
	return resultsArray;
};




