var uiModule = (function () {
    var $searchBar = $('.search-bar');
    var $rootElem = $('.root');

    function getSearchBarData() {
        return $searchBar.val();
    };

    function displayPosts(postsArr) {


        $rootElem.html('');
        if (!postsArr.length) {
            $rootElem.append('<p>No results!</p >');
        };


        postsArr.forEach(function (post) {
            $rootElem.append('<p>' + post.id + '. ' + post.title + '</p>');
        });
    };

    return {
        getSearchBarData: getSearchBarData,
        displayPosts: displayPosts
    };


})();