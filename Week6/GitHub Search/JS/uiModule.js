var uiModule = (function () {
    var $searchBar = $('.search-bar');
    var $resultArea = $('.results')
    var $searchResult = $('.user');
    var $clickOnSearchResult;

    function getSearchBarData() {
        return $searchBar.val();
    };

    function displayUsers(usersArr) {

        $resultArea.html('');

        if (!usersArr.length) {
            $resultArea.append('<p>No results!</p >');
        };



        usersArr.forEach(function (post) {
            $resultArea.append('<a href="' + post.html_url + '">' + '<span class="user"><img src="' + post.avatar_url + '" alt=""></img>' + '<h3 class="username">' + post.login + '</h3></span>' + '</a>');

        });


        // $secondResultArea.html('');


        // function repResult() {
        //     $searchResult.click()
        //     $clickOnSearchResult = $secondResultArea.open('<a href="' + '" target="' + post.repos_url + '"' + post.login);
        // };



        //via a
        // usersArr.forEach(function (post) {

        //     $resultArea.append('<a href="' + post.html_url + '">' + '<span class="user"><img src="' + post.avatar_url + '" alt=""></img>' + '<h3 class="username">' + post.login + '</h3></span>' + '</a>');
        // });



        //via span
        // usersArr.forEach(function (post) {

        //     $resultArea.append('<span class="user">' + '<img src="' + post.avatar_url + '" alt=""></img>' + '<a href="' + post.html_url + '"><h3 class="username">' + post.login + '</h3></a>' + '</span>');
        // });



    };





    return {
        getSearchBarData: getSearchBarData,
        displayUsers: displayUsers,
        // repResult: repResult

    };
})();