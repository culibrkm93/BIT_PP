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
            return '' + this.title + ' ' + this.length + ' ' + this.genre;
        }
    }

    function Program(date) {
        this.date = date;
        this.list = [];
        this.totalNumberOfMovies = this.list.length;

        this.addMovie = function (newMovie) {
            this.list.push(newMovie);
        }
    }



    var action = new Genre("Action").getData();

    var sfd = new Movie("sldkfj", action, '123 min');

    var domestic = new Program('10.02');
    domestic.addMovie(sfd);

    console.log(domestic)




})();