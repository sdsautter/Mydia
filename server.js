var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));

app.use(express.static("./public"));

// Routes =============================================================
require("./routes/api-routes.js")(app);
require('./routes/user-api-routes.js')(app);
require("./routes/html-routes.js")(app);
require("./controllers/omdb_controller.js")(app);
require("./controllers/google_books_controller.js")(app);
require("./controllers/giant_bomb_controller.js")(app);
require("./controllers/last_fm_controller.js")(app);
require("./routes/movie-api-routes.js")(app);
require("./routes/book-api-routes.js")(app);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
