var request = require("request");

module.exports = function(app) {
    // GET route for getting all of the Burgers
    app.get("/search/book/:title", function(req, res) {
        var bookTitle = req.params.title;
        request("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle, function(error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {

                console.log(JSON.parse(body).items);

                var book = {
                    book: JSON.parse(body).items
                }
                res.render("index", book);
            }
        });
    });
}