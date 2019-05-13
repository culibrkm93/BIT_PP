var chars = ['c', 'd', 't', 'i', 'd'];
var occ = [];
for (var j = 0; j < chars.length; j++) {  //Prolazak kroz sve elemente u skupu
    var element = chars[j];
    var counter = 0;
    for (var i = 0; i < chars.length; i++) { //Brojanje koliko pta je taj isti element u skupu
        if (element === chars[i]) {
            counter++
        }
    }

    occ[j] = counter;  //Upisivanje broja ponavljanja u istu poziciju na kojoj je bio element, u novi skup
}
var maxElementValue = occ[0];
var maxElementIndex = 0;

for (var i = 0; i < occ.length; i++) {
    if (occ[i] > maxElementValue) {
        maxElementValue = occ[i];
        maxElementIndex = i;
    }
}
console.log(chars[maxElementIndex] + ' => ' + maxElementValue);


//PREKO FUNKCIJA!!

function getMostFrequentElement(elements) {
    var occ = [];

    for (var j = 0; j < elements.length; j++) {  //Prolazak kroz sve elemente u skupu
        var element = elements[j];
        var counter = 0;

        for (var i = 0; i < elements.length; i++) { //Brojanje koliko pta je taj isti element u skupu
            if (element === elements[i]) {
                counter++
            }
        }

        occ[j] = counter;  //Upisivanje broja ponavljanja u istu poziciju na kojoj je bio element, u novi skup
    }

    var maxElementAndIndex = (getMaxElementAndPosition(occ));

    var indexOfMostFrequentElement = maxElementAndIndex[1];

    return elements[indexOfMostFrequentElement];
}

function getMaxElementAndPosition() {
    var maxElementValue = occ[0];
    var maxElementIndex = 0;

    for (var i = 0; i < occ.length; i++) {
        if (occ[i] > maxElementValue) {
            maxElementValue = occ[i];
            maxElementIndex = i;
        }
    }
    var elementAndIndex = [maxElementValue, maxElementIndex];

    return elementAndIndex;
}
`        `
var chars = ['c', 'd', 't', 'i', 'd'];
var result = getMostFrequentElement(chars);
console.log(result);
