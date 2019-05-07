var arrayOfArrays = [['bit', 'tib'], ['it', 'ti'], ['bt', 'tb', 'bb']];
var finalString = '';
for (var i = 0; i < arrayOfArrays.length; i++) {

    var innerArray = arrayOfArrays[i]; // ---> ['bit', 'tib']

    for (var j = 0; j < innerArray.length; j++) {
        //console.log(innerArray[j]); // ----> 'bit', 'tib'...
        finalString += innerArray[j];
    }

    finalString += '\n';
}


console.log(finalString);

// 'bittib' -- > innerArray[0] + innerArray[1]
// 'itti'
// 'bttbbb'