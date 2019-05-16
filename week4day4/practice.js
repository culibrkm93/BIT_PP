// 1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]


var arrayOfNumbers = [4, 5, 11, 9];
var elementReplacement = (function (arrayOfNumbers) {
    var tmp = arrayOfNumbers[0];
    arrayOfNumbers[0] = arrayOfNumbers[arrayOfNumbers.length - 1];
    arrayOfNumbers[arrayOfNumbers.length - 1] = tmp;
    return arrayOfNumbers;
})(arrayOfNumbers);

console.log(elementReplacement);



// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 

var surfaceArea = (function (a, b) {
    var result;
    result = a * b;
    return result;
})(4, 5);
console.log(surfaceArea);

// 3.Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// Input: prograMming
// Output: progra**ing, 2

var inputString = 'prograMming';
var replacementOfLetters = (function (inputString) {
    var outputString = '';
    var counter = 0;

    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i] === 'm' || inputString[i] === 'M') {
            outputString += '*'
            counter++;
        } else {
            outputString += inputString[i];
        }
        var replacedElements = [outputString, counter];
    } return replacedElements;
})(inputString);

console.log(replacementOfLetters);

// 4. Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com

var name = 'pera';
var surname = 'peric';

var emailSuggestion = (function (name, surname) {

    var emailBuilding = (function () {
        return name + '.' + surname + '@gmail.com';
    })(name, surname);
    return emailBuilding;

})(name, surname);
console.log(emailSuggestion);

// 5.Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28

var input = 034
// poslednja cifra se mnozi sa 8^0 pa svaka sledeca se stepenuje za jedan vise ((ax8^2) + (bx8^1)+(cx8^0))
var decimalConversion = (function () {
    var conversion = (function (input) {
        return decimal = '' + input;
    })(input);
    return conversion;
})(input);
console.log(decimalConversion);