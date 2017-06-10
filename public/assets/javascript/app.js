var omdbKey = OmdbConfig.apiKey,
    lastFmKey = LastFmConfig.apiKey,
    giantBombKey = GiantBombConfig.apiKey;

$("#lookie").on("click", function(event) {
    event.preventDefault();

    var mediaSearch = $("#search").val().trim();
    mediaSearch = mediaSearch.replace(/\s/g, '+');

    // albumSearch(mediaSearch);
    movieSearch(mediaSearch);
    // bookSearch(mediaSearch);
    // videoGameSearch(mediaSearch);

});

$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

//API call for OMDB
function movieSearch(movie) {
    var query = "http://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + movie + "&r=json";
    getSearch(query);
}

//API call to populate movie 
function movieModal(imdbId) {
    var query = "http://www.omdbapi.com/?apikey=" + omdbKey + "&i=" + imdbId + "&r=json";
    getSearch(query);
}

//API call for google books
function bookSearch(book) {
    var query = "https://www.googleapis.com/books/v1/volumes?q=" + book;
    getSearch(query);
}

//API call for a last.fm album search
function albumSearch(album) {
    var query = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + album + "&limit=30&api_key=" + lastFmKey + "&format=json";
    getSearch(query);
}

//API call to get information about a specific album if you use their own ID
function movieModal(mbidId) {
    var query = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&&mbid=" + mbidId + "&api_key=" + lastFmKey + "&format=json"
}

//API call for giant bomb's video game search
function videoGameSearch(game) {
    var query = "http://www.giantbomb.com/api/search/?api_key=" + giantBombKey + "&format=json&query=" + game + "&resources=game";
    getSearch(query);
}

//Does the api get calls for whatever query we put into it
function getSearch(query) {
    $.get(query, function(data) {
        console.log(data);
        return data;
    });
}
