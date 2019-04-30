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