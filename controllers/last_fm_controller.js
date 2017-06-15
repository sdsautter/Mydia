var request = require("request");
var Config = require("../config/config.js")

var LastFmKey = Config.LastFm.apiKey;

var loopIndex = 0;
var albumDetailsArray = [];

module.exports = function (app) {
    // GET route for getting all of the Burgers
    app.get("/search/album/:title", function (req, res) {
        var albumTitle = req.params.title;

        albumSearch(albumTitle, function (data) {
            // console.log(data.results.albummatches);
            albumLoops(data.results.albummatches.album, function (data) {
                var album = {
                    album: data
                }
                
                res.render("index", album);
            })
        });

    });

    function albumLoops(albumArray, cb) {

        albumDetails(albumArray[loopIndex].mbid, function (data) {
            if (typeof data.album !== "undefined") {
                for (var i = 0; i < data.album.image.length; i++) {
                    if (data.album.image[i].size === "large") {
                        data.album.mydia_image = data.album.image[i]["#text"];
                    }
                }
            }
            albumDetailsArray.push(data.album);
            loopIndex++;
            if (loopIndex < albumArray.length) {
                albumLoops(albumArray, cb);
            } else {
                //If the page is 4, then we run our array through the movie details search and reset the page number
                loopIndex = 0;

                return cb(albumDetailsArray);

            }

        });

    }

    function albumSearch(album, cb) {
        request(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&limit=30&api_key=${LastFmKey}&format=json`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                return cb(JSON.parse(body));
            }

        });
    }

    //This uses the imdbID we got from the movie search request to get more details about the movie
    function albumDetails(mbidId, cb) {
        request(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&&mbid=${mbidId}&api_key=${LastFmKey}&format=json`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                return cb(JSON.parse(body));
            }

        });
    }

}