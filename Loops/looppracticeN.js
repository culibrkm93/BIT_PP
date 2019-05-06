var a = [4, 12, 33, 78, 56, 69, 101, 201];
var l;
if (a.length % 2 != 0) {
    l = (a.length - 1) / 2
}
else {
    l = a.length / 2;
}
for (var i = l; i < a.length; i++) {
    console.log(a[i]);
}

// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

numbers = [3, 500, 12, 149, 53, 414, 1, 19];

function swap(numbers) {
    var max = 0;
    var min = 500;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            maxIndex = i;
        } if (numbers[i] < min) {
            min = numbers[i];
            minIndex = i;
        }
    } return (min, max);
} console.log(min, max);