var $elButon = document.querySelector('.btn');

var $movieTitle = document.querySelector('.title');
var $movieLength = document.querySelector('.length');
var $movieGenre = document.querySelector('#selection');
var $titleArea = document.querySelector('.movie-area');
var $totalMovieLength = document.querySelector('.value')
var $error = document.querySelector('.error');
var $form = document.getElementById("myForm");


function createMovie(title, genre, length) {
    var newGenreObject = new Genre(genre);
    return new Movie(title, newGenreObject, length);
}

var movies = []

function onMovieCreate(event) {
    event.preventDefault();

    var title = $movieTitle.value;
    var genre = $movieGenre.value;
    var length = $movieLength.value;

    if (title === '' || length === '' || genre === '-') {
        $error.textContent = 'All fields must be filled out!'
        $elButon.before(error);
        return error;
    } else {
        $error.textContent = '';
    }
    var movie = createMovie(title, genre, length);
    movies.push(movie)
    var $newTitle = document.createElement('span');
    $newTitle.textContent = movie.getData();

    $titleArea.appendChild($newTitle);

    var totalLength = 0
    for (var i = 0; i < movies.length; i++) {
        totalLength += parseInt(movies[i].length)
        $totalMovieLength.textContent = totalLength + ' min';
    }

    $form.reset();
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
