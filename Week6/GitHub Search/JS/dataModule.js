var dataModule = (function () {

    function getUsers(searchString, onSuccess) {
        var requestUrl = 'https://api.github.com/search/users?q=' + searchString;

        $.get(requestUrl, function (data) {
            onSuccess(data.items);
        })
    }

    function getRepositories(user, onSuccess) {
        var user = this.login
        var requestRepUrl = 'https://api.github.com/search/users/:' + user + '/repos';
        $.get(requestRepUrl, function (reps) {
            onSuccess(reps.items);
            console.log('test');
        })
    }



    return {
        getUsers: getUsers,
        getRepositories: getRepositories
    }

})();