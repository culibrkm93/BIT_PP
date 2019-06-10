
const $searchInput = $(".input");
const $showArea = $(".shows");

function renderShows(shows) {
  $showArea.append('<h1 class="main-title">Popular Shows</h1>')
  shows.forEach(function (show) {

    const template = `
        <a href="#">
          <div class="col-4 tv-show d-inline-block"  data-show-id="${show.id}">
            <img src="${show.image.medium}" alt="">
            <h5 class="show-name">${show.name}</h5>
          </div>
        </a>`;

    $showArea.append(template);
  });

}

function renderSingleShow(show) {
  $showArea.html('');
  $showArea.append('<h1 class="main-title">' + show.name + '</h1>')

  let seasons = '';

  show._embedded.seasons.forEach(function (season) {

    seasons += '<li class="seasons-list">' + season.premiereDate + ' - ' + season.endDate + '</li>';
  });

  let cast = '';

  show._embedded.cast.forEach(function (members) {
    cast += '<li class="cast-list">' + members.person.name + '</li>';
  });



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
};

function showSearch(shows) {
  $showArea.html('');
  shows.forEach(function (show) {
    console.log(show.show.image)
    if (show.show.image === null) {
      $('img').attr('class', 'broken-img');
      $('img').attr('src', 'https://tinyurl.com/y782eus8');
    } else {
      const template = `
          <a href="#">
            <div class="col-4 tv-show d-inline-block"  data-show-id="${show.show.id}">
              <img src="${show.show.image.medium}" alt="">
              <h5 class="show-name">${show.show.name}</h5>
            </div>
          </a>`;

      $showArea.append(template);
    }
  })
};








// function getSearchInput() {
//   return $searchInput.val();
// }

export {
  renderShows,
  renderSingleShow,
  showSearch
};

