var omdbKey = OmdbConfig.apiKey;

$("#lookie").on("click", function(event) {
    event.preventDefault();

    var mediaSearch = $("#search").val().trim();
    var replaced = mediaSearch.replace(/\s/g, '+');

    movieSearch(replaced);

});

$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

function movieSearch(movie) {
    
    var query = "http://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + movie + "&r=json";
    $.get(query, function(data) {
        console.log(data);
        return data;
    });

}
