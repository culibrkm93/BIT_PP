const uiModule = (function () {
  const $searchInput = $(".input");
  const $showArea = $(".shows");

  function renderShows(shows) {
    $showArea.append('<h1 class="main-title">Popular Shows</h1>')
    shows.forEach(function (show) {

      const template = `
        <a href="#">
          <div class="col-4 tv-show d-inline-block"  data-show-id="${show.id}">
            <img src="${show.image.medium}" alt="">
            <h4 class="show-name">${show.name}</h4>
          </div>
        </a>`;

      $showArea.append(template);
    });

  }

  function renderSingleShow(show) {
    $showArea.html('');
    $showArea.append('<h1 class="main-title">' + show.name + '</h1>')

    let seasons = '';
    console.log(show);
    show._embedded.seasons.forEach(function (season) {
      console.log(season);
      seasons += '<li class="seasons-list">' + season.premiereDate + ' - ' + season.endDate + '</li>';
    });

    let cast = '';
    console.log(show);
    show._embedded.cast.forEach(function (members) {
      cast += '<li class="cast-list">' + members.person.name + '</li>';
    });

    console.log(seasons);

    const templateString = `
    <div class="single-show">
      <div class="row">  
        <div class="col-8 image-area">
          <img src="${show.image.original}" alt="" class="single-img">
        </div>
      <div class="col-4">
      <ul>Seasons (${show._embedded.seasons.length})
      ${seasons}
      </ul>
      <ul>Cast
      ${cast}
      </ul>
      </div>
      </div>
      <h3>Show Details</h3>
      <p class="details">${show.summary}</p>
    </div>`;




    $showArea.append(templateString);
  }

  // function getSearchInput() {
  //   return $searchInput.val();
  // }

  return {
    renderShows,
    renderSingleShow
  };
})();
