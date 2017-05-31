/* Function findsum which takes arguments */
function findSum(){
/* variable sum declared */
var sum = 0;
/* variable i declared */
var i = 0;
	/* for loop to calculate the sum of the arguments still arguments.length */
	for (i = 0; i < arguments.length; i += 1) 
	{ 
		sum += arguments[i];	/* sum up all arguments */
	}
/* return sum*/
return sum;
};
/* display the sum of all the arguments on console */
console.log("Sum of the given array[1,2,3] is :" + (findSum( 1,2,3)));
/* display the sum of all the arguments on console */
console.log("Sum of the given array[1,2,3,4,5,6,7,8,9,10] is :" + findSum( 1,2,3,4,5,6,7,8,9,10));