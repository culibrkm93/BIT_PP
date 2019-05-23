function GameStudio(name, address) {
    this.name = name;
    this.address = address;
    this.employees = [];
    this.games = [];

    this.makeGame = function (name, genre, recommendedAge) {
        var newGame = new Game(name, genre, recommendedAge);
        this.games.push(newGame);
    };

    this.hireEmployee = function (name, age, position) {
        var employee = new Employee(name, age, position);
        this.employees.push(employee);
    };

    this.listAllGames = function () {
        var listOfGames = '';
        for (var i = 0; i < this.games.length; i++) {
            listOfGames += this.games[i].getGameList() + '\n';
        }
        return listOfGames
    }

    this.listAllEmployees = function () {
        var listOfEmployees = '';
        for (var i = 0; i < this.employees.length; i++) {
            listOfEmployees += this.employees[i].getEmployeesList() + '\n';
        }
        return listOfEmployees;
    }


}

function Game(name, genre, recommendedAge) {
    this.name = name;
    this.genre = genre;
    this.recommendedAge = recommendedAge;
    this.getGameList = function () {
        return (
            '\n Name:' + this.name
            + '\n Genre:' + this.genre
            + '\n Recommended Age is:' + this.recommendedAge
        );
    }
};

function Employee(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.getEmployeesList = function () {
        return (
            '\n Name:' + this.name
            + '\n Age:' + this.age
            + '\n Position is:' + this.position
        );
    }

};

var capcom = new GameStudio('Capcom', 'Bulevar Kralja Aleksandra 35'); //Pravljenje Game Studia

capcom.hireEmployee("Milos", 26, "CEO");
capcom.hireEmployee("Dusica", 37, "kafe kuvarica");
capcom.hireEmployee("Nenad", 29, "Team lead");

capcom.makeGame('Resident Evil', 'Horror', '17+');
capcom.makeGame('Monster Hunter World', "Role Playing Game", '12+');
capcom.makeGame('Street Fighter V', 'Fighting Game', '12+');

var gameInfo = capcom.listAllGames();
var employeeInfo = capcom.listAllEmployees();
console.log(gameInfo);
console.log(employeeInfo);

