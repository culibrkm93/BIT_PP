var controllerModule = function (data, ui) {

    // function displayMostPopularShows(shows) {
    //     ui.displayPopularShows(shows);
    // }

    // function afterSearch(shows) {
    //     ui.displayFoundShows()
    // }

    // function setupEventListeners() {
    //     $('.input').keydown(function (e) {
    //         if (e.keyCode === 13) {
    //             e.preventDefault();
    //             var searchInput = ui.getSearchInput();
    //             data.getShows(searchInput);
    //         }
    //     })

    // }




    function init() {
        data.getPopShows(function (shows) {
            ui.renderShows(shows);
        });
    }

    return {
        init: init
    }
}(dataModule, uiModule);