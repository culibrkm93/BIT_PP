var controllerModule = (function (data, ui) {

    function after(users) {
        ui.displayUsers(users);
    }



    function setupEventListeners() {
        $('.search-bar').keydown(function (e) {
            if (e.keyCode === 13) {
                var searchStr = ui.getSearchBarData();

                data.getUsers(searchStr, after);
            }
        })

    }
    // function newEventListener() {
    //     $(ui.searchResult).click(function (e) {
    //         data.getRepositories(searchResult);

    //     })
    // }

    function init() {
        setupEventListeners();
        // newEventListener()
    }

    return {
        init: init,
    }


})(dataModule, uiModule);