// //Built In Objects 
// //W5 D2

// // Try to solve all assignments on a separate branch.Keep in mind that you should try to use built -in objects and their methods, solo or combined.
// // You should use loops only for the 4 and 10 assignment, all others can be solved using built -in object methods.

// // 1 Write a function to convert a number from one base(radix) to another.
// // 	Hint: Use one of the built -in functions and toString method of one of the built -in Object Wrappers;

// // 'ff', 16, 8 -> 377

// function convert(number, numberBase, base) {

// 	var result = parseInt(number, numberBase).toString(base);
// 	return result;
// }

// console.log(convert('ff', 16, 8));



// // 2 Write a JavaScript function that reverses a number.typeof result of the function should be “number”.

// // 12345 -> 54321


// var x = 12345;

// function reverse(n) {

// 	var newArray = n.toString().split('').reverse().join('');

// 	return (newArray);
// }

// console.log(reverse(x));



// // 3 Write a JavaScript function that returns a passed string with letters in alphabetical order.
// // 	Note: Assume punctuation, numbers and symbols are not included in the passed string.

// // “Webmaster” -> “abeemrstw”



// function alphabeticalOrder(w) {

// 	var newWord = w.toLowerCase().split('').sort().join('');
// 	return newWord;
// }

// var word = 'Webmaster';
// console.log(alphabeticalOrder(word));


// // 4 Write a function to alphabetize words of a given string.Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// // 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"



// function alphabetical(c) {
// 	var newAlphabeticalOrder = c.split(' ');
// 	var c = []
// 	for (var i = 0; i < newAlphabeticalOrder.length; i++) {
// 		var a = newAlphabeticalOrder[i].split('').sort().join('');
// 		var b = new Array(a).join();
// 		c[c.length] = b;
// 	}
// 	c = c.toString();

// 	return c.replace(/,/g, ' ');

// }

// var country = 'Republic Of Serbia';
// console.log(alphabetical(country));


// // 5 Write a function to split a string and convert it into an array of words.

// // 	"John Snow" -> ['John', 'Snow']



// // function splitName(n) {
// // 	var separateWords = n.split(' ');

// // 	return separateWords;
// // }

// // var name = 'John Snow';
// // console.log(splitName(name));



// // 6 Write a function to convert a string to its abbreviated form. 

// // 	"John Snow" -> "John S."



// function abbreviation(word) {

// 	var abbreviatedWord = word.split(" ");
// 	var firstName = abbreviatedWord[0];
// 	var lastName = abbreviatedWord[1];
// 	lastName = lastName.slice(0, 1);

// 	return firstName + ' ' + lastName + '.';

// }

// var words = 'John Snow';
// console.log(abbreviation(words));


// // 7 Write a function that can pad(left, right) a string to get to a determined length.

// // 	'0000', 123, 'l' -> 0123   ////da ide nula pa broj
// // '00000000', 123, 'r' -> 12300000  ////da ide nula pa broj

function pad(pad, number, position) {
	if (number === undefined) {
		return pad;
	}

	if (position === 'l') {
		return (pad + number).slice(-pad.length);
	} else {
		return (number + pad).slice(0, pad.length);
	}

}
console.log(pad('00000000', 123, ''));








// // 8 Write a function to capitalize the first letter of a string and returns modified string.

// // "js string exercises" -> "Js string exercises"


// function capitalizeFirstLetter(a) {
// 	var letterUpp = a.slice(0, 1);
// 	var restOfString = a.slice(1, a.length);
// 	var firstLetter = letterUpp.toString().toUpperCase();
// 	var finalString = firstLetter + restOfString;
// 	return finalString;
// }

// var string = 'js string exercises';
// console.log(capitalizeFirstLetter(string));




// // 9 Write a function to hide email addresses to protect them from unauthorized users.

// // 	"somerandomaddress@example.com" -> "somerand...@example.com"


// function hidenMail(w) {

// 	var at = w.indexOf('@');
// 	var endOfUserName = w.slice(at, w.length);
// 	var shownUsername = w.indexOf('d');
// 	var beginningOfUserName = w.slice(0, shownUsername + 1);
// 	var hiddenPart = w.slice(shownUsername + 1, at);
// 	var dots = hiddenPart.replace(hiddenPart, '...');

// 	return beginningOfUserName + dots + endOfUserName;

// }

// var wholeEmail = 'somerandomaddress@example.com';
// console.log(hidenMail(wholeEmail));



// 10 Write a program that accepts a string as input and swaps the case of each character.For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function reCapitalize(sentence, upper, lower) {

	var newLower = lower.split('');
	var newUpper = upper.split('');
	var splitedSentence = sentence.split('');


for (var i = 0; i < splitedSentence.length; i++) {
	for (j = 0; j < newUpper.length || j < newLower.length; j++) {
		if (splitedSentence[i] === newUpper[j]) {
			splitedSentence[i] = newLower[j];
			// } else if (splitedSentence[i] === newLower[j]) {
			// 	splitedSentence[i] = newUpper[j];
		} else if (splitedSentence[i] === newLower[j]) {
			splitedSentence[i] = newUpper[j];

		}

	}
}
return splitedSentence.join('').toString();
}
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var input = 'The Quick Brown Fox';
console.log(reCapitalize(input, upper, lower));
