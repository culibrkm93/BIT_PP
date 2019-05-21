// 2. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

var a = new Number(12345);
var b = a.toString().split('').reverse().join('');
var c = parseInt(b);

console.log(c);
console.log(typeof c);

//3.Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

function reversalOfString() {
    var originalString = new String('Webmaster');
    var newString = originalString.toLowerCase().split('').sort().join('');
    return newString;
}
console.log(reversalOfString());


function reverseNumber(num) {
    var reverse = num.toString().split('').reverse().join('');
    var toNumber = parseInt(num);
    var type = typeof toNumber;

    return 'Sorted number is ' + reverse + ' and typeof is ' + type;
}

console.log(reverseNumber(12345));