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
            
            return '' + this.title + ' ' + this.length + 'min' + ' ' + this.genre;
        }
    }

    function Program(date) {
        this.date = date;
        this.list = [];
        this.totalNumberOfMovies = 0;
        
        
    this.addMovie = function (news) {
            this.list.push(news);
            this.totalNumberOfMovies++;
        }
    this.getData= function (){
        var totalLength = 0
        totalLength+= totalMovielength; 
        console.log(totalLength);
        return '' + this.date + '\n' + this.list
    }

    
    }
    // The string should contain date, program length (calculated from length of all movies in a list)
    //  and data about movies in a list (see the example below). To display movie data, use Movie’s getData method.


    function Festival(name){
        this.name=name;
        this.listOfPrograms=[];
        
        this.addProgram= function (newProgram){
            this.listOfPrograms.push(newProgram);
        }
        
        this.numberOfMoviesInAllPrograms= function (){
            for (var i=0;i<listOfPrograms.length;i++){
                var counter=0;
                counter++;
            }
            return counter;
        }
    }



    var action = new Genre("Action").getData();

    var film = new Movie("film", action, 123);
    var film2 = new Movie("film2", action, 123);
    var totalMovielength = film.length + film2.length;
    // console.log(totalMovielength);

    var domestic = new Program('10.02');
    domestic.addMovie(film.getData());
    domestic.addMovie(film2.getData());

    var fest= new Festival ('Summer');
    fest.addProgram(domestic.getData());
    console.log(fest);
   


})();