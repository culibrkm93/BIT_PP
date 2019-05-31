var dataModule = (function () {

    function fetchPosts(searchString, onSuccess) {
        var requestUrl = 'https://jsonplaceholder.typicode.com/posts?q' + searchString;
        $.get(requestUrl, function (data) {
            onSuccess(data)
        })
    }



    return {
        fetchPosts: fetchPosts
    }
})();