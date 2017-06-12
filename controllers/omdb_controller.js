var request = require("request");
var Config = require("../config/config.js")

var omdbKey = Config.Omdb.apiKey;

var movieSearchArray = [];
var movieDetailArray = [];
var page = 1;
var loopIndex = 0;


module.exports = function (app) {
    // GET route for getting all of the Burgers
    app.get("/search/movie/:title", function (req, res) {
        var movieTitle = req.params.title;

        movieSearchArray = [];
        movieDetailArray = [];

        movieLoopArray(movieTitle, function (data) {
            var movie = {
                movie: data
            };
            res.render("index", movie);
        });

    });


    //This is the API request to get 10 results per page when searching for a particular movie
    function movieSearch(movie, cb) {
        request(`http://www.omdbapi.com/?apikey=${omdbKey}&s=${movie}&page=${page}&type=movie&r=json`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {

                return cb(JSON.parse(body));
            }

        });
    }

    //This uses the imdbID we got from the movie search request to get more details about the movie
    function movieDetails(imdbId, cb) {
        request(`http://www.omdbapi.com/?apikey=${omdbKey}&i=${imdbId}&r=json`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                return cb(JSON.parse(body));
            }

        });
    }

    //This is the callback loop. If the page is less than 4, then we do a movie search and push the results to an array
    function movieLoopArray(movieTitle, cb) {

        movieSearch(movieTitle, function (data) {
            for (var i = 0; i < data.Search.length; i++) {
                movieSearchArray.push(data.Search[i]);
            }

            page++;
            if (page < 4) {
                movieLoopArray(movieTitle, cb);
            } else {
                //If the page is 4, then we run our array through the movie details search and reset the page number
                movieDetailsLoop(movieSearchArray, function (data) {
                    page = 1;

                    return cb(movieDetailArray);

                });
            }
        });

    }

    //We loop through the movie search array to get more data from each movie in order to push that to its own array
    function movieDetailsLoop(movieSearchArray, cb) {

        movieDetails(movieSearchArray[loopIndex].imdbID, function (data) {
            movieDetailArray.push(data);
            loopIndex++;

            if (loopIndex < movieSearchArray.length) {
                movieDetailsLoop(movieSearchArray, cb);
            } else {
                loopIndex = 0;
                return cb(movieDetailArray);
            }
        });
    }

}