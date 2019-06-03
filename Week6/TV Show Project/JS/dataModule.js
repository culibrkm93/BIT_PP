var dataModule = function () {
    function getPopShows(callback) {
        var popShowsUrl = 'http://api.tvmaze.com/shows';

        $.get(popShowsUrl, function (data) {
            callback(data.slice(0, 49));
        })
    };

    // function getShows(searchInput, onSuccess) {

    //     var requestUrl = 'http://api.tvmaze.com/search/shows?q=' + searchInput;

    //     $.get(requestUrl, function (data) {
    //         onSuccess(data.items);
    //     })
    // }


    return {
        // getShows: getShows,
        getPopShows: getPopShows
    }


}();