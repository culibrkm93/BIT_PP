var coffee = 'Latte';
var strongness;
switch (coffee) {
    case 'Espresso':
        strongness = 4;
        break;

    case 'Turkish coffee':
    case 'Latte':
        strongness = 2;
        break;

    default:
        strongness = undefined;
        break;

} console.log(coffee + " je jacine " + strongness);