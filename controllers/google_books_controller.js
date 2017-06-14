var request = require("request");

var bookArray = [];
module.exports = function (app) {
    // GET route for getting all of the Burgers
    app.get("/search/book/:title", function (req, res) {
        bookArray = [];
        var bookTitle = req.params.title;
        request(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=30`, function (error, response, body) {

            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                // console.log(JSON.parse(body).items.length);
                for (var i = 0; i < JSON.parse(body).items.length; i++) {
                    var bookPath = JSON.parse(body).items[i];
                    if (bookPath.volumeInfo.description) {
                        var description = JSON.parse(body).items[i].volumeInfo.description;
                        var replaceQuote = description.replace(/"/g, "'");
                        bookPath.new_description = replaceQuote;
                        bookArray.push(bookPath);
                    } else {
                        bookArray.push(bookPath);
                    }
                }
                
                var book = {
                    book: bookArray
                }

                res.render("index", book);
            }
        });
    });
}