//1.
var x = "";

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        x = i + " is even!";
        console.log(x);
    } else {
        x = i + " is odd!";
        console.log(x);
    }
}

//2
var sum = 0;
for (var i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

//3
var a = [8, 9, 5, 3, 7, 4, 1, 6, 2];
var sum = 0;
var prod = 1;
for (var i = 0; i < a.length; i++) {
    sum = sum + a[i];
    prod = prod * a[i];

}
console.log(sum);
console.log(prod);

//4
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var i;
var sum = "";
for (i = 0; i < x.length; i++) {
    sum = sum + x[i]
}
console.log(sum);

//6
var sum = 0;
for (var x = 1; x <= 20; x++) {
    sum += (x * x);
}
console.log(sum);

//7
var ocene = [80, 77, 88, 95, 68];
var sum = 0;
var avg = 0;
for (var i = 0; i < ocene.length; i++) {
    sum = sum + ocene[i];
    avg = sum / ocene.length;
}

console.log(avg);

for (var i = 0; i < ocene.length; i++) {
    console.log(i);
    if (ocene[i] < 0.6 * avg) {
        console.log("F");
    }
    else if (0.6 * avg <= ocene[i] && ocene[i] < 0.7 * avg) {
        console.log("D");
    }
    else if (0.7 * avg <= ocene[i] && ocene[i] < 0.8 * avg) {
        console.log("C");
    }
    else if (0.8 * avg <= ocene[i] && ocene[i] < 0.9 * avg) {
        console.log("B");
    }
    else if (0.9 * avg <= ocene[i] && ocene[i] <= avg) {
        console.log("A");
    }
    else {
        console.log("A+");
    }
}