// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
	//split up the string into an array of words
	const words = str.split(" ");
	// console.log(words);

	//define loop result variable
	const upperWords = [];

	// upper case each word
	words.forEach((word) => {
		let capWord = word.charAt(0).toUpperCase() + word.slice(1);
		// console.log(word);
		upperWords.push(capWord);
	});
	// console.log(upperWords);

	//concat the array of words
	const joinedWords = upperWords.join("");
	// console.log(joinedWords);

	//remove first capital
	const camelWords = joinedWords.charAt(0).toLowerCase() + joinedWords.slice(1);
	console.log(camelWords);

	return camelWords;
};
