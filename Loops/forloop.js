//for petlja
var i;
for (i = 1; i <= 20; i++) {
}
console.log('The End');

//Zbir elemenata niza

var a = [6, 7, 12]; // 6 + 7 + 12
console.log(a[0], + a[1], +a[2]);

//sa petljom

var a = [6, 9, 12, 8, 342, 90, 34, 12, 8392];
var sum = 0;
var i;
// 0 + 6 = 6 --> sum

for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
console.log(sum);