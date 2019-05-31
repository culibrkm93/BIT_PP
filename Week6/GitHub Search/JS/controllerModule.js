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

    function init() {
        setupEventListeners()
    }

    return {
        init: init,
    }


})(dataModule, uiModule);