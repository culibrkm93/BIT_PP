//3.

var day = 6;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('It\'s weekday');
        break;
    case 6:
    case 7:
        console.log('It\'s weekend');
        break;
    default:
        console.log('Input must be number between 1 and 7');
}
console.log('The end');

//4.

var month = 1;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('Input must be between 1 and 12');
}

console.log('The End');


//5.

var month = 3;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('autumn');
        break;
    default:
        console.log('Input must be number between 1 and 12');
}
console.log('The End');


//6.

var grade = 'E';
switch (grade) {
    case 'A':
        console.log('Good job');
        break;
    case 'B':
        console.log('Pretty good');
        break;
    case 'C':
        console.log('Passed');
        break;
    case 'D':
        console.log('Not so good');
        break;
    case 'F':
        console.log('Failed');
        break;
    default:
        console.log('Unknown grade')
}

console.log('The End');


//7.
var city = 'Katarina';
switch (city) {
    case 'Beograd':
    case 'Nis':
    case 'Novi Sad':
    case 'Kragujevac':
    case 'Subotica':
    case 'Valjevo':
    case 'Zajecar':
        console.log('Srbija')
        break;
    case 'New York':
    case 'Washington':
    case 'Chicago':
    case 'Boston':
    case 'Miami':
    case 'Los Angeles':
        console.log('SAD')
        break;
    case 'Rim':
    case 'Padova':
    case 'Verona':
    case 'Venecija':
        console.log('Italija')
        break;
    case 'Atina':
    case 'Solun':
    case 'Larisa':
    case 'Kavala':
    case 'Katarina':
        console.log('Grcka')
        break;
    case 'Zagreb':
    case 'Split':
    case 'Zadar':
        console.log('Hrvatska')
        break;
    default:
        console.log('Please choose a different city!')
}

//8.
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
