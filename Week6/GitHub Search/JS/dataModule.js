var dataModule = (function () {

    function getUsers(searchString, onSuccess) {
        var requestUrl = 'https://api.github.com/search/users?q=' + searchString;

        $.get(requestUrl, function (data) {
            onSuccess(data.items);
        })
    }



    return {
        getUsers: getUsers
    }

})();