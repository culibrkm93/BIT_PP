//Prvi i poslednji element niza!

var a = [3, 6, 7, 'abc', true, 6, 89, 100]
var firstIndex = 0;
var firstElement = a[firstIndex];

var lastIndex = a.length - 1;
var lastElement = a[lastIndex];

console.log(firstElement, lastElement);

//Element iz sredine neparnog i parnog niza!!

if (a.length % 2 == 1) {
    // 9/2 =4.5
    // 11/2=5.5

    var middleIndex = (a.length - 1) / 2;
    var middleElement = a[middleIndex];
    console.log(middleElement);
} else {
    var middleIndexLeft = a.length / 2 - 1;
    var middleElementLeft = a[middleIndexLeft];
    var middleIndexRight = a.length / 2;
    var middleElementRight = a[middleIndexRight];
    console.log(middleElementLeft, middleElementRight);
}

//Zamena vrednosti varijabli

x = 10;
y = 5;

// x<--- 5 , y<--- 10
//uvodjenje privremene varijable

var tmp = x;
x = y;
y = tmp;

//Zamena mesta elemenata u nizu!!

var a = [6, 8, 10, -5, 23];
var tmp;

tmp = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = tmp;
console.log(a);

//provera jacine kafe!

var coffee = 'Latte';
var strongness;
switch (coffee) {
    case 'Espresso':
        strongness = 4;
        break;

    case 'Turkish coffee':
    case 'Latte':
        strongness = 2;
        break;

    default:
        strongness = undefined;
        break;

} console.log(coffee + " je jacine " + strongness);