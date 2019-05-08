// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

var n = 5;
var row = '';
for (var i = 0; i < n; i++) {

    for (var j = 0; j < n; j++) {
        row += '* ';
    }
    row += '\n';
} console.log(row);

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

var n = 5;
var row = '';
for (var i = 0; i < n; i++) {

    for (var j = 0; j < n; j++) {
        if (i !== 0 &&
            i < n - 1 &&
            j !== 0 &&
            j < n - 1) {
            row += '  ';
        } else {
            row += '* ';
        }

    }
    row += '\n';
}
console.log(row);

// *
// * *
// * * *
// * * * *
// * * * * *

var n = 5;
var row = '';
for (var i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i >= j) {
            row += '* ';
        } else {
            break;
        }
    }
    row += '\n';
} console.log(row);

// *
// * *
// *   *
// *     *
// * * * * *

var n = 5;
var row = '';
for (var i = 0; i < n; i++) {

    for (var j = 0; j < n; j++) {

        if (j === 0 || i === n - 1 || i === j) {
            row += '* ';
        } else {
            row += '  ';
        }
    }

    row += '\n';
}
console.log(row);

// * * * * *
//   * * *  
//     *    


var columns = 5;
var rows = 3;
var shape = '';

for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
        if (i !== 0 || i < rows - 1) {
            shape += '* ';
        } else if (i >= j) {
            shape += '__';
        }
    }

    shape += '\n';
}

console.log(shape);


var n = 5;
var shape = '';

for (var i = 0; i < (n + 1) / 2; i++) {

    for (var j = 0; j < n; j++) {

        if (j < i || j > n - 1 - i) {
            shape += '  ';
        } else {
            shape += '* '
        }
    }

    shape += '\n';
}

console.log(shape);