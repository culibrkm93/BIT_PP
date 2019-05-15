

// function info() {
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.onLine);
// }
// info();


// function isOnline() {
//     (window.navigator.onLine) ? console.log('online') : console.log('offline');
//     return window.navigator.onLine;
// }
// var sum = isOnline();
// console.log(sum);



// function screenSize() {
//     console.log(window.screen.availHeight);
//     console.log(window.screen.availWidth);
//     console.log(window.screen.height);

// }

// screenSize()


// function websiteUrl() {

//     console.log(window.location.href);
//     console.log(window.location.search);
//     console.log(window.location.hostname);
//     console.log(window.location.protocol);
// }
// websiteUrl()




// function reload() {
//     console.log(window.location.reload())
// }
// reload()

// function passed() {
//     window.location.href = 'http://www.google.com'
// }
// passed();

// console.log();



// function setStorage() {

//     console.log(window.localStorage.setItem('car', 'jar'));
// }

// setStorage();

// function getStorage() {

//     console.log(window.localStorage.getItem('car'));

// }
// getStorage()




// function neww() {
//     var res;

//     if (window.localStorage.getItem.length) {
//         res = 'There is Data';
//     } else {
//         res = 'There is no Data';
//     }
//     return res;
// }
// var sum = neww();
// console.log(sum);


// function backBut() {
//     window.location.href = 'https://www.google.com'

// }

// backBut()





// setTimeout(function () {
//     var win = window.open('http://youtube.com')
// }, 3000)




/*Write a function that combines two arrays by alternatingly taking elements.*/

for (var i = 0; i < 4; i++) {
    console.log('prva start');

    for (var j = 0; j < 2; j++) {
        console.log('druga');
    }

    console.log('prva stop');
}



function rotate(elements, shift) {
    var rotated = [];

    for (var i = 0; i < elements.length; i++) {
        var newPosition = i + shift;

        if (newPosition < elements.length) {
            rotated[newPosition] = elements[i];
        } else {
            rotated[newPosition - elements.length] = elements[i];
        }
    }

    return rotated;
}

function rotate(elements, shift) {
    var rotated = [];

    for (var i = 0; i < elements.length; i++) {
        var newPosition = (i + shift) % elements.length;

        rotated[newPosition] = elements[i];
    }

    return rotated;
}

var arr2 = [1, 2, 3];
console.log(rotate(arr2, 5));

var arr2 = [1, 2, 3];
console.log(rotate(arr2, 5));





function combinesTwoArrays(firstArray, secondArray) {
    var combined = [];

    for (var i = 0; i < firstArray.length; i++) {
        combined[i] = firstArray[i];
    }

    for (i = 0; i < secondArray.length; i++) {
        var newArrayIndex = firstArray.length + i;
        combined[newArrayIndex] = secondArray[i];
    }

    return combined;
}

function combinesTwoArraysWithOneLoop(firstArray, secondArray) {
    var combined = [];
    var mergedLength = firstArray.length + secondArray.length;

    for (var i = 0; i < mergedLength; i++) {
        if (i < firstArray.length) {
            combined[i] = firstArray[i];
        } else {
            combined[i] = secondArray[i - firstArray.length];
        }
    }

    return combined;
}

var arr = ['a', 'b', 'c', 'd', 'e'];
var arr2 = [1, 2, 3];

var merged = combinesTwoArraysWithOneLoop(arr, arr2);

console.log(merged);



/*Write a function to find and return the first, middle and last element
of an array if the array has odd number of elements. If number of elements is even,
 return just the first and the last.
 In other cases (empty array), input array should be returned.*/


// function findReturn(a) {
//     var medianIndex;
//     var first;
//     var last;
//     for (var i = 0; i < a.length; i++) {
//         if (a.length % 2 === 1) {

//             medianIndex = i.length / 2;

//             console.log(medianIndex);



//         }

//         var newArr = [medianIndex, first, last];
//     }
//     return newArr
// }

// var arr = [1, 2, 3, 4, 5];
// var sum = findReturn(arr);
// console.log(sum);




