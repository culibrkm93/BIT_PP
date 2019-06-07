import * as ui from './uiModule.js';
import * as data from './dataModule.js';

function setupListenersOnShowClick() {
    $('.tv-show').on('click', function () {
        const showId = $(this).attr('data-show-id');

        data.getSingleShow(showId)
            .then(showData => {
                ui.renderSingleShow(showData);
            });
    });

};

function searchEventListener() {
    $('.input').on('keypress', function (e) {

        if (e.keyCode === 13) {
            e.preventDefault();

            const userInput = $(this).val();

            data.getShows(userInput)
                .then(userInput => {
                    ui.showSearch(userInput);
                    setupListenersOnShowClick()
                })
        }
    })
}


function init() {
    searchEventListener()
    data.getPopShows()
        .then(ui.renderShows)
        .then(setupListenersOnShowClick)

};



export {
    init
}
