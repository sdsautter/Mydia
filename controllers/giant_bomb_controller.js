var request = require("request");
var Config = require("../config/config.js")

var giantBombKey = Config.GiantBomb.apiKey;

module.exports = function(app) {
    // GET route for getting all of the Burgers
    app.get("/search/game/:title", function(req, res) {
        var gameTitle = req.params.title;
        request(`http://www.giantbomb.com/api/search/?api_key=${giantBombKey}&format=json&query=${gameTitle}&resources=game`, function(error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                // console.log(movieName);

                // console.log(body.totalResults);
                console.log(JSON.parse(body));

                var game = {
                    game: JSON.parse(body).results
                }
                res.render("index", game);
            }
        });
    });
}