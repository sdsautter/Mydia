var omdbKey = OmdbConfig.apiKey,
    lastFmKey = LastFmConfig.apiKey;

$("#lookie").on("click", function(event) {
    event.preventDefault();

    var mediaSearch = $("#search").val().trim();
    var mediaSearch = mediaSearch.replace(/\s/g, '+');

    // albumSearch(mediaSearch);
    movieSearch(mediaSearch);
    // bookSearch(mediaSearch);

});

$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

//API call for OMDB
function movieSearch(movie) {
    var query = "http://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + movie + "&r=json";
    getSearch(query);
}

//API call for google books
function bookSearch(book) {
    var query = "https://www.googleapis.com/books/v1/volumes?q=" + book;
    getSearch(query);
}

//API call for a last.fm album search
function albumSearch(album) {
    var query = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + album + "&limit=30&api_key=" + lastFmKey + "&format=json"
    getSearch(query);
}

//Does the api get calls for whatever query we put into it
function getSearch(query) {
    $.get(query, function(data) {
        console.log(data);
        return data;
    });
}
