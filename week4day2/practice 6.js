// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

var stringArray = 'Game Of Thrones';
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function vowelSearch() {
    var numberofvowels = 0;
    for (i = 0; i < stringArray.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if (stringArray[i] === vowels[j]) {
                numberofvowels++;
            }
        }

    } return numberofvowels;
}
console.log(vowelSearch(stringArray));


// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var arrayOfLetters = ['a', 'b', 'c'];
var arrayOfNumbers = [1, 2, 3];
function combiningArrays() {
    var combinedArrays = [];
    for (var i = 0; i < arrayOfLetters.length; i++) {
        combinedArrays[combinedArrays.length] = arrayOfLetters[i];
        combinedArrays[combinedArrays.length] = arrayOfNumbers[i];
    }
    return combinedArrays;
} console.log(combiningArrays(arrayOfLetters, arrayOfNumbers));


// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var givenArray = [1, 2, 3, 4, 5, 6];
var rotatedArray = [];
k = 2;
function arrayRotation() {
    for (var i = 0, j = 0; i < givenArray.length, j < rotatedArray.length; i++ , j++) {
        if (i > k) {
            rotatedArray[j] = givenArray[i + 2];
            j++;
        } else {
            rotatedArray[j] = givenArray[i - (givenArray.length - k)];
            j++;
        }
    }
    return rotatedArray;
} console.log(arrayRotation(givenArray));

// Write a function that takes a number and returns array of its digits.

var givenNo = '85622';
function noToString() {
    var noToArray = [];
    for (var i = 0; i < givenNo.length; i++) {
        noToArray[noToArray.length] = parseInt(givenNo[i]); // Parse int string pretvara u broj!!! - Milica
    }
    return noToArray;
}
console.log(noToString(givenNo));

// Write a program that prints a multiplication table for numbers up to 12.

n = 12;
var table = '';
function multiplicationTable(n) {
    for (var i = 1; i <= n; i++) {

        for (var j = 1; j <= n; j++) {
            table += i * j + ' ';
            if (j === n) {
                table += '\n';
            }
        }
    }
    return table;
}
console.log(multiplicationTable(n));


