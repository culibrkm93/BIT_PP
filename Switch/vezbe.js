var n = 50;
if (n > 10) {
    console.log('Broj je veci od 10');
} else {
    console.log('Broj nije veci od 10');
}

m = "59";
if (m % 2 == 0) {
    console.log('Broj je paran')
} else {
    console.log('Broj je neparan')
}

//Dobijanje zadnje cifre
n = 58
var last_digit = n % 10;
console.log(last_digit);

//Dobijanje prve cifre
n = 69;
var first_digit = (n - n % 10) / 10;
console.log(first_digit);

//Proveravanje parnosti prve cifre
n = 69;
var first_digit = (n - n % 10) / 10;
console.log(first_digit);
if (first_digit % 2 == 0) {
    console.log("Prva cifra je parna")
} else {
    console.log("Prva cifra nije parna")
}