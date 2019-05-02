//funkcija koja ce da racuna zbir dva broja

// // var a = 10; //parametri
// var b = 5;
// var result;
// result = a + b;
//ime dodeljujemo bilo koje
function sum(a, b) {
    //a 567 <-, b <- 826
    var result;
    result = a + b;

    return result; //vracamo vrednost
}


//zbir brojeva 567 826


var x = 79;
var y = 50;
result = sum(x, y);
x = 40;
result = sum(x, y);
console.log(result);


//console.log (arguments);
//arguments reflektuje sve vrednosti nad kojima je funkcija pozvana (ako ima viska vrednosti i njih cuva);
//ako nemamo return u okviru funkcije vraca nam return UNDEFINED;
//POSLE RETURN se nepise nista;

//Zadaci
// Write a program that calculates the maximum of two given numbers. 
// Input: 4 8
// Result: 8

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

m = max(4, 8);
console.log(m);


// Write a program that checks if a given number is odd.
// Input: 56
// Result: No

function odd(a) {
    var n = '';
    var y = '';

    if (a % 2 === 1) {
        y = "yes"
        return y;

    } else {
        n = "no";
        return n;

    }
}
o = odd(56);
console.log(o);


// Write a program that checks if a given number is a three digit long number.
// Input: 567
// Result: Yes
var a = 354;
function check(a) {
    var al = ('' + a).length;

    if (al === 3) {
        return "Yes!";
    }
    else {
        return "No!";
    }
}

length = check(a)
console.log(length);


var a = 567;
function check(a) {
    if (a > 99 && a < 1000) {
        return "Yes";
    } else {
        return "No";
    }
}

al = check(a);
console.log(al);

// Write a program that calculates an arithmetic mean of four numbers.
// Input: 7 5 1 3
// Result: 4

var array = [7, 5, 1, 3];
var arm;
function middle(array) {
    var sum = 0;
    var am;

    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    am = sum / array.length;
    return am;
}
arm = middle(array);
console.log(arm);


// Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****


// var n = 4;
// for (var row = 1; row <= n; row++) {
//     //prvi i poslednji red
//     if (row == 1 || row == n) {
//         //iscrtati n zvezdica
//         var stars = '';
//         for (var i = 1; i <= n; i++) {
//             stars = stars + '*';
//         }
//         console.log(stars);
//     } else {
//         //jedna zvezda
//         // n - 2 belina
//         //jedna zvezda
//         var line = '';
//         line = line + '*'
//         for (i = 1; i <= n - 2; i++) {
//             line = line + ' ';
//         }
//         line = line + '*'
//         console.log(line);
//         }
//      }



//sa varijablom koja iscrtava pa stampamo funkciju
var n = 5;
function iscrtavanje(n) {
    crtano = '';
    for (var row = 1; row <= n; row++) {
        if (row == 1 || row == n) {
            var stars = '';
            for (var i = 1; i <= n; i++) {
                stars = stars + '*';
            }
            // console.log(stars);
            crtano += stars;
            crtano += '\n';
        } else {
            var line = '';
            line = line + '*';
            for (var i = 1; i <= n - 2; i++) {
                line = line + ' ';
            } line = line + '*';
            // console.log(line);
            crtano += line;
            crtano += '\n';

        }

    }
    return crtano;
}

iscrtano = iscrtavanje(n);
console.log(iscrtano)


//sa pozivanjem funkcije koja direktno stampa
var n = 5;
function iscrtavanje(n) {
    for (var row = 1; row <= n; row++) {
        if (row == 1 || row == n) {
            var stars = '';
            for (var i = 1; i <= n; i++) {
                stars = stars + '*';
            }
            console.log(stars);

        } else {
            var line = '';
            line = line + '*';
            for (var i = 1; i <= n - 2; i++) {
                line = line + ' ';
            } line = line + '*';
            console.log(line);


        }

    }

}

iscrtavanje(n);

//6
// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

var a = [5, 3, 7];

function ispisivanje(a) {
    var result = "";
    for (var i = 0; i < a.length; i++) { //prolazi kroz indexe niza
        for (var j = 0; j < a[i]; j++) { //vadi vrednost elemenata iz niza
            result += "*";                 //pisace broj zvezdica u vrednosti elementa
        }
        result += '\n';                 //novi red na kraju prvog brojaca
    }
    return result;
}
console.log(ispisivanje(a));


// Write a program that calculates a number of digits of a given number. 
// Input: 67984
// Output: 5

var a = 67984;

function numberOfDigits(a) {
    var al = ('' + a).length;
    return al;
}
length = numberOfDigits(a);
console.log(length);

// Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

a = [2, 4, 7, 8, 7, 7, 1];
e = 7;
var app = 0;
function noapp(e) {
    for (i = 0; i < a.length; i++) {
        if (e === a[i]) {
            app = app + 1;
        }
    }
    return app;
}
var res = noapp(e);
console.log(res);