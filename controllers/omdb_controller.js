var request = require("request");
var Config = require("../config/config.js")

var omdbKey = Config.Omdb.apiKey;

module.exports = function(app) {
    // GET route for getting all of the Burgers
    app.get("/search/movie/:title", function(req, res) {
        var movieTitle = req.params.title;
        request(`http://www.omdbapi.com/?apikey=${omdbKey}&s=${movieTitle}&r=json`, function(error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                // console.log(movieName);

                // console.log(body.totalResults);
                console.log(JSON.parse(body).Search);

                var movie = {
                    movie: JSON.parse(body).Search
                }
                res.render("index", movie);
            }
        });
    });
}