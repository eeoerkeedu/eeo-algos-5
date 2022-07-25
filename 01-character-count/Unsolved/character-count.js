// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

const characterCount = function (str) {
	const brokenStr = str.split("");
	console.log(brokenStr);
	const letters = {};
	brokenStr.forEach((char) => {
		if (!letters[char]) {
			letters[char] = 1;
		} else {
			letters[char] = letters[char] + 1;
			console.log("found");
		}
	});
	console.log(letters);
	return letters;
};
