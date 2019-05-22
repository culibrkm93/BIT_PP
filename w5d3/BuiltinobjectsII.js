// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]


// var duplicate = function (x) {
//     for (var i = x.length - 1; i >= 0; i--) {
//         x.splice(i, 0, x[i]);
//     }
//     return x;
// }
// console.log(duplicate([2, 4, 7, 11, -2, 1]));



// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// // Output: [1, 4, 8, 9, 12, 13] 

var removalOfDuplicates = function (arrayOfNumbers) {
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        for (var j = 0; j < arrayOfNumbers.length; j++) {
            if (arrayOfNumbers[i] === arrayOfNumbers[j]) {
                var newArray = new Set(arrayOfNumbers);
                newArray.toString('');

            }
        }
    }
    return newArray;
}
console.log(removalOfDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));



