
function insert(text, word, position) {

    if (arguments.length == 2) {
        position = 0;
    }
    var newText = '';

    for (var i = 0; i < position; i++) {
        newText = newText + text[i];
    }
    for (var j = 0; j < word.length; j++) {
        newText += word[j];
    }
    for (i = position; i < text.length; i++) {
        newText += text[i];
    }
    return newText;
}

var output = insert('My random string', 'JS ', 10);
//insert('My random string', 'JS ', 10);
console.log(output);
