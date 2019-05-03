// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]


function provera(arr) {
    var arra = [];
    var j = 0;
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            arra[j] = parseFloat(arr[i]);
            j++;
        }
    }
    return arra;
}
var result;
result = provera(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);



// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”


function writing(arr) {
    var a = '';
    for (var i = 0; i < arr.length; i++) {
        // switch(arr[i]){
        //     case 0
        if (arr[i] != undefined && arr[i] != null && isFinite(arr[i]) == true) {
            a += arr[i];
        }
    }
    return a;
}
var result;
result = writing([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result);

// Write a program to filter out falsy values from the array.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]
function filtering(arr) {
    var a = [];
    var j = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != undefined && isFinite(arr[i]) == true && arr[i] != null && arr[i] != false) {
            a[j] = arr[i];
            j++;
        }
    }
    return a;
}
var result;
result = filtering([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result);


// Write a program that calculates a number of integer values in the array.

// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function calculcatesNum(arr) {
    var ar = [];
    var j = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != false && isFinite(arr[i]) == true && arr[i] != null && arr[i] == parseInt(arr[i])) {
            ar[j] = arr[i];
            j++;
        }
    }
    return ar.length;

}

var result;
result = calculcatesNum([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(result);

// Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function calculation(arr) {
    var ar = [];
    var j = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != false && isFinite(arr[i]) == true && arr[i] != null && arr[i] != parseInt(arr[i])) {
            ar[j] = arr[i];
            j++;
        }
    }
    return ar.length;

}
var result;
result = calculation([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(result);




// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"





function insert(text, word, position) {

    if (arguments.length == 2) {
        position = 0;
    }
    var newText = '';

    for (var i = 0; i < position; i++) {
        newText = newText + text[i];
    }
    for (var j = 0; j < word.length; j++) {
        newText += word[j];
    }
    for (i = position; i < text.length; i++) {
        newText += text[i];
    }
    return newText;
}

var output = insert('My random string', 'JS ', 10);
//insert('My random string', 'JS ', 10);
console.log(output);
