var omdbKey = OmdbConfig.apiKey;

$("#lookie").on("click", function(event) {
    event.preventDefault();

    var mediaSearch = $("#search").val().trim();
    var mediaSearch = mediaSearch.replace(/\s/g, '+');

    movieSearch(mediaSearch);

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

//Does the api get calls for whatever query we put into it
function getSearch(query) {
    $.get(query, function(data) {
        console.log(data);
        return data;
    });
}