// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
	// define variables
	let largest = 0;
	let second = 0;
	// sort arr into decending order
	const arrSorted = arr.sort(function (a, b) {
		return b - a;
	});
	console.log(arrSorted);

	// give variables new vaules based on sorted arr
	assign = () => {
		largest = arrSorted[0];
		second = arrSorted[1];
	};
	assign();
	console.log(largest, second);

	// multiply and return variables
	const product = largest * second;
	console.log(product);
	return product;
};
