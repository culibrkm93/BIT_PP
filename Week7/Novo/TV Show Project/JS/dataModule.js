
const baseUrl = `http://api.tvmaze.com/shows`;
function getPopShows() {

    return fetch(baseUrl)
        .then(response => response.json())
        .then((data) => data.slice(0, 50))
};

function getSingleShow(showId) {
    const singleShowUrl = `${baseUrl}/${showId}?embed[]=seasons&embed[]=cast`;
    return fetch(singleShowUrl)
        .then(response => response.json())
        .then(data => data);
}
function getShows(searchInput) {
    const userInput = searchInput;
    const searchUrl = `http://api.tvmaze.com/search/shows?q=${userInput}`;
    return fetch(searchUrl)
        .then(response => response.json())
        .then(data => data);
}


export {
    getShows,
    getPopShows,
    getSingleShow
}
