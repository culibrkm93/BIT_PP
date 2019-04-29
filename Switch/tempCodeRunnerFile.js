var first = 4;
var second = 2;
var result = '';
var operation = '/';
switch (operation) {
    case '+':
        console.log(result = first + second);
        break;
    case '-':
        console.log(result = first - second);
        break;
    case '/':
        if (second !== 0) {
            console.log(result = first / second);
        } else {
            console.log('Can\'t divide by 0!!!!')
        }
        break;
    case '*':
        console.log(result = first * second);
        break;
}