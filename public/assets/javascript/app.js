var omdbKey = OmdbConfig.apiKey;

$("#lookie").on("click", function(event){
    event.preventDefault();

    var movie = $("#search").val().trim();
    var replaced = movie.replace(/\s/g, '+');
    var query = "http://www.omdbapi.com/?apikey=" + omdbKey + "&s=" + movie + "&r=json";

    $.get(query, function(data) {
    	console.log(data);
    });

    // console.log(query);
});

console.log(omdbKey);

