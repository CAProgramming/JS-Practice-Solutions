var maxNumbers = parseInt(prompt('How many numbers in the sequence would you like to display?'));

var last = 1;
var curr = 1;
var next;

for(var i = 0; i < maxNumbers-2; i++) {
	next = last + curr;
	last = curr;
 	curr = next;
	console.log(curr);
}
