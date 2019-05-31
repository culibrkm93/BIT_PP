var ctrlModule = (function (data, ui) {
    // var $searchBtn = document.querySelector('.search-btn');
    function setupEventListeners() {
        $('.search-btn').click(function () {

            //U searchStr smestamo vrednost koju pozivamo iz UI modula koja kupi vrednost iz input polja.
            var searchStr = ui.getSearchBarData();


            //definisanje onSuccess funkcije koja kada se request obavi prikaze sta smo dobili
            function onSuccess(posts) {
                ui.displayPosts(posts)
            }


            //pozivanjem fetchPosts funkcije iz data modula, dobijamo povratne informacije
            data.fetchPosts(searchStr, onSuccess);
        })
    }

    function init() {
        console.log('App init Somiiiiiiiii');
        setupEventListeners()
    }

    return {
        init: init,
    }

})(dataModule, uiModule);