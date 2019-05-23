// Exercises | Objects Intro



//1 Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!


//2 Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 



// //3 Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, 
// git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks 
// if the program is written in JavaScript as well as a method that checks if program is completed or not.


function computerProgram(description, programminglanguage, gitrepository, booleanstatus) {

    return {
        description: description,
        programminglanguage: programminglanguage,
        gitrepository: gitrepository,
        booleanstatus: booleanstatus,

        printGit: function () {
            return this.gitrepository;
        },
        proLange: function () {
            if (this.programminglanguage === "JS") {
                return this.programminglanguage;
            };
        },
        printBoolean: function () {
            if (this.booleanstatus === true) {
                return "Program is completed!";
            } else {
                return "Program is not completed!";
            }
        }
    };

}

var jelena = computerProgram("Super Mario", "JS", "github-jelena", "true");
var dusica = computerProgram("Football", "JS", "github-dusica", "false");
var peki = computerProgram("Nba", "Python", "github-peki", "true");

console.log(jelena.printGit());

console.log(printGit);
console.log(dusica);
console.log(peki);






// // 4 Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, 
// git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks 
// if the program is written in JavaScript as well as a method that checks if program is completed or not.





function recipe(name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstruction) {

    return {
        name: name,
        typeOfCuisine: typeOfCuisine,
        complexity: complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        preparingInstruction: preparingInstruction,

        factoryIngredients: function () {
            return this.listOfIngredients
        },

        factoryPreperingTime: function () {
            if (this.preparingTime <= 15) {
                return "Can be prepared";
            } else {
                return "Can not be prepared";
            }
        },

        factoryTypeOfCuisine: function () {
            this.typeOfCuisine = "serbian";
        },

        factoryListOfIngredients: function () {
            this.listOfIngredients = [meat, bread, egg, salt];
        }
    }
}


var serbian = recipe("cevapi", "serbian", 3, ["meat", "bread", "egg", "salt"], 14, "Mix all ingredients");
var english = recipe("english breakfast", "english", 5, ["meat", "egg", "franchfries", "beans"], 14, "Mix all ingredients");
var chinese = recipe("vegetable", "chinese", 4, ["meat", "onion", "cabagge", "carot", "salt"], 14, "Mix all ingredients");

console.log(serbian.factoryIngredients());