//1

var numbers = [5, -4.2, 3, 7];
var e = 3;
function arrayCheck(numbers, e) {
    var final = 'No';
    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i] === e) {
            final = 'Yes';
        }
    }
    return final;
}
var result = arrayCheck(numbers, e);
console.log(result);

//2

var numbers = [-3, 11, 5, 3.4, -8];
function multiplication(numbers) {
    var newArray = [];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            newArray[i] = numbers[i] * 2;
        } else {
            newArray[i] = numbers[i];
        }
    }
    return newArray;
}
var result = multiplication(numbers);
console.log(result);

//3 Write a program that finds the minimum of a given array and prints out its value and index. 
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3


var numbers = [4, 2, 2, -1, 6];
function findMinimum(numbers) {
    var min = numbers[0];
    var index = 0;
    var output = ''
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
            index = i
            output = min + ',' + index;
        }
    }
    return output;
}
var result;
result = findMinimum(numbers);
console.log(result);

// 4 Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var numbers = [4, 2, 2, -1, 6];
function findMinimum(numbers) {
    var min = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

function findSecondToMin(numbers) {
    var min = findMinimum(numbers);
    var secondMin = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > min && numbers[i] < secondMin) {
            secondMin = numbers[i];
        }

    }
    return secondMin;
} var result = findSecondToMin(numbers);
console.log(result);

//5 Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var numbers = [3, 11, -5, -3, 2];

function addition(numbers) {
    var output = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            output += numbers[i];
        }
    } return output;
}
result = addition(numbers);
console.log(result);

// 6 Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

var symarray = [2, 4, -2, 7, -2, 4, 12];
function symmetry(symarray) {
    var result = true;
    for (var i = 0, j = symarray.length - 1; i < symarray.length; i++ , j--) {
        if (symarray[i] !== symarray[j]) {  //Mora se ispitati jesu razliciti, jer je dovoljno da je jedan razlicit da bi se islo dalje i ispitivali samo tacni!!!
            result = false;
        }
    } return result;
}

var res = symmetry(symarray);
console.log(res);


// 7 Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

arraya = [4, 5, 6, 2];
arrayb = [3, 8, 11, 9];
var result = [];
function intertwine(arraya, arrayb) {
    var newArray = [];
    for (var i = 0; i < arraya.length; i++) {
        newArray[newArray.length] = arraya[i];
        newArray[newArray.length] = arrayb[i];
    }
    return newArray;
}

result = intertwine(arraya, arrayb);
console.log(result);

// 8 Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

arraya = [4, 5, 6, 2];
arrayb = [3, 8, 11, 9];
var result = [];
function addarray(arraya, arrayb) {
    var newArray = [];
    for (var i = 0; i < arraya.length; i++) {
        newArray[newArray.length] = arraya[i];
    }
    for (var i = 0; i < arrayb.length; i++) {
        newArray[newArray.length] = arrayb[i];
    }
    return newArray;
}

result = addarray(arraya, arrayb);
console.log(result);

// 9 Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

function deleteElement(arr, e) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i];
        if (currentElement !== e) {
            var lastfreeindex = newArray.length;
            newArray[lastfreeindex] = currentElement;
        }
    }
    return newArray;
}
var arr = [4, 6, 2, 8, 2, 2];
var e = 2;
console.log(deleteElement(arr, e));

// 10 Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]


//NIJE GOTOVO!

var arr = [2, -2, 33, 12, 5, 8];
e = 78;
p = 3;
function addelement(arr, p, e) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray = arr[i] + e[p];
    }
    return newArray;
}
var result = addelement(arr, p, e);
console.log(result);