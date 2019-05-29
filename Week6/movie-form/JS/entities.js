class Genre {
    constructor(name) {
        this.name = name;
    }
    getData() {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(this.name.length - 1);
        return firstLetter.toUpperCase() + lastLetter.toUpperCase();
    }

}

class Movie {
    constructor(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

    }

    getData() {
        return this.title + ', ' + this.length + ' min' + ', ' + this.genre.getData();
    }
}

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.list = [];
        this.totalNumberOfMovies = 0;
    }
    addMovie(news) {
        this.list.push(news);
        this.totalNumberOfMovies++;
    }
    programLength() {
        var totalMovielength = 0;
        for (var i = 0; i < this.list.length; i++) {
            totalMovielength += this.list[i].length;
        }
        return totalMovielength;
    }
    listOfMovies() {
        var listOfAllMovies = '';
        for (var i = 0; i < this.list.length; i++) {
            listOfAllMovies += '\t\t\t\t\t\t' + this.list[i].getData() + '\n'
        }
        return listOfAllMovies;
    }
    getData() {
        return this.date.toLocaleDateString() + ', program duration ' + this.programLength() + 'min' + '\n' + this.listOfMovies();
    }
}


class Festival {
    constructor(name) {
        this.name = name;
        this.listOfPrograms = [];
    }
    addProgram(newProgram) {
        this.listOfPrograms.push(newProgram);
    }
    numberOfMoviesInAllPrograms() {
        var counter = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            counter += this.listOfPrograms[i].totalNumberOfMovies;
        }
        return counter + ' movie titles';
    }
    listOfThePrograms() {
        var listOfAllPrograms = '';
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            listOfAllPrograms += '\t\t\t' + this.listOfPrograms[i].getData();
        }
        return listOfAllPrograms;
    }
    getData() {
        return '' + this.name + ' has ' + this.numberOfMoviesInAllPrograms() + '\n' + this.listOfThePrograms();
    }
}
