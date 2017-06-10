var request = require("request");
var Config = require("../config/config.js")

var LastFmKey = Config.LastFm.apiKey;

module.exports = function(app) {
    // GET route for getting all of the Burgers
    app.get("/search/album/:title", function(req, res) {
        var albumTitle = req.params.title;
        request(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumTitle}&limit=30&api_key=$${LastFmKey}&format=json`, function(error, response, body) {
            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                // console.log(movieName);

                // console.log(body.totalResults);
                console.log(JSON.parse(body));
                // console.log(JSON.parse(body));


                var album = {
                    album: JSON.parse(body).results.albummatches
                }
                res.render("index", album);
            }
        });
    });
}