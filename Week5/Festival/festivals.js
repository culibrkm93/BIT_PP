"use strict";

(function () {

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            var firstLetter = this.name.slice(0, 1);
            var lastLetter = this.name.slice(this.name.length - 1, this.name.length);
            return '' + firstLetter.toUpperCase('') + lastLetter.toUpperCase('');
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return '' + this.title + ', ' + this.length + ' min' + ', ' + this.genre.getData();
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.list = [];
        this.totalNumberOfMovies = 0;


        this.addMovie = function (news) {
            this.list.push(news);
            this.totalNumberOfMovies++;
        }

        this.programLength = function () {
            var totalMovielength = 0;

            for (var i = 0; i < this.list.length; i++) {
                totalMovielength += this.list[i].length;

            }

            return totalMovielength;
        }

        this.listOfMovies = function () {
            var listOfAllMovies = '';

            for (var i = 0; i < this.list.length; i++) {
                listOfAllMovies += '\t\t\t\t\t\t' + this.list[i].getData() + '\n'
            }

            return listOfAllMovies;
        }

        this.getData = function () {

            return '' + this.date.toLocaleDateString() + ', program duration ' + this.programLength() + 'min' + '\n' + this.listOfMovies();
        }


    }


    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.addProgram = function (newProgram) {
            this.listOfPrograms.push(newProgram);
        }

        this.numberOfMoviesInAllPrograms = function () {
            var counter = 0;

            for (var i = 0; i < this.listOfPrograms.length; i++) {
                counter += this.listOfPrograms[i].totalNumberOfMovies;
            }

            return counter + ' movie titles';
        }

        this.listOfThePrograms = function () {
            var listOfAllPrograms = '';
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                listOfAllPrograms += '\t\t\t' + this.listOfPrograms[i].getData();
            }
            return listOfAllPrograms;
        }

        this.getData = function () {
            return '' + this.name + ' has ' + this.numberOfMoviesInAllPrograms() + '\n' + this.listOfThePrograms();
        }
    }


    function createMovie(title, name, length) {
        var genreObject = new Genre(name);
        return new Movie(title, genreObject, length);
    }

    function createProgram(date) {

        return new Program(date);
    };

    var film1 = createMovie("Spider-Man:Homecoming", 'Action', 133);
    var film2 = createMovie("War for the Planet of the Apes", 'Drama', 140);
    var film3 = createMovie("The Dark Tower", 'Western', 95);
    var film4 = createMovie('Deadpool', 'Comedy', 108);

    var sciFi = createProgram('10 28 2019.');
    sciFi.addMovie(film1);
    sciFi.addMovie(film2);
    sciFi.addMovie(film3)
    var happy = createProgram('10 29 2019.');
    happy.addMovie(film4);


    var weekendFest = new Festival('Weekend festival');
    weekendFest.addProgram(sciFi);
    weekendFest.addProgram(happy);

    console.log(weekendFest.getData());
})();