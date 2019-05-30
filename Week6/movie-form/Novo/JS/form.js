var $elButon = document.querySelector('.btn');

var $movieTitle = document.querySelector('.title');
var $movieLength = document.querySelector('.length');
var $movieGenre = document.querySelector('#selection');
var $titleArea = document.querySelector('.movie-area');
var $totalMovieLength = document.querySelector('.value')
var $error = document.querySelector('.error');
var $form = document.querySelector("#myForm");

function collectMovieData() {
    return {
        title: $movieTitle.value,
        genre: $movieGenre.value,
        length: $movieLength.value
    }
}

function createMovie(title, genre, length) {
    var newGenreObject = new Genre(genre);
    return new Movie(title, newGenreObject, length);
}

function validateMovieForm(movieFormData) {
    if (movieFormData.title === '' || movieFormData.length === '' || movieFormData.genre === '-') {
        return ['Invalid data!'];
    }

    return [];
}


var movies = [];

function addMovie(singleMovie) {
    movies.push(singleMovie);
    return movies;
}

function renderMovie(movie) {
    var $newTitle = document.createElement('span');
    $newTitle.textContent = movie.getData();

    $titleArea.appendChild($newTitle);
}

function resetMovieForm() {
    $form.reset();
    resetErrors();
}


function calculateMoviesLength(movies) {
    var totalLength = 0;

    for (var i = 0; i < movies.length; i++) {
        totalLength += parseInt(movies[i].length);
    }

    return totalLength;
}

function renderMoviesLength(totalLength) {
    $totalMovieLength.textContent = totalLength + ' min';
}

function renderErrors(errors) {
    var errorsHtml = "";

    errors.forEach(function (error) {
        errorsHtml += '<br>' + error;
    });

    $error.innerHTML = errorsHtml;
}

function resetErrors() {
    $error.innerHTML = "";
}

$elButon.addEventListener('click', function (event) {
    event.preventDefault();

    var formData = collectMovieData();

    var validationErrors = validateMovieForm(formData);
    if (validationErrors.length > 0) {
        renderErrors(validationErrors);
        return;
    }

    var movie = createMovie(
        formData.title,
        formData.genre,
        formData.length,
    );

    var movies = addMovie(movie);

    renderMovie(movie);
    resetMovieForm();

    var length = calculateMoviesLength(movies);
    renderMoviesLength(length);
});

