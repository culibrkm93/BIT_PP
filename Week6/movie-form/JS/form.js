var $elButon = document.querySelector('.btn');

var $movieTitle = document.querySelector('.title');
var $movieLength = document.querySelector('.length');
var $movieGenre = document.querySelector('#selection');
var $titleArea = document.querySelector('.movie-area');

function createMovie(title, genre, length) {
    var newGenreObject = new Genre(genre);
    return new Movie(title, newGenreObject, length);
}

function onMovieCreate(event) {
    event.preventDefault();

    var title = $movieTitle.value;
    var genre = $movieGenre.value;
    var length = $movieLength.value;

    if (title === '' || length === '' || genre === '') {
        var error = document.createElement('span');
        error.textContent = 'All fields must be filled out!'
        $elButon.before(error);
        return error;
    }
    var movie = createMovie(title, genre, length);

    var $newTitle = document.createElement('span');
    $newTitle.textContent = movie.getData();

    $titleArea.appendChild($newTitle);
}

$elButon.addEventListener('click', onMovieCreate);


// ---------------------------------------------------------








// function createProgram(date) {

//     return new Program(date);
// };

// var film1 = createMovie("Spider-Man:Homecoming", 'Action', 133);
// var film2 = createMovie("War for the Planet of the Apes", 'Drama', 140);
// var film3 = createMovie("The Dark Tower", 'Western', 95);
// var film4 = createMovie('Deadpool', 'Comedy', 108);

// var sciFi = createProgram('10 28 2019.');
// sciFi.addMovie(film1);
// sciFi.addMovie(film2);
// sciFi.addMovie(film3)
// var happy = createProgram('10 29 2019.');
// happy.addMovie(film4);


// var weekendFest = new Festival('Weekend festival');
// weekendFest.addProgram(sciFi);
// weekendFest.addProgram(happy);

// console.log(weekendFest.getData());
