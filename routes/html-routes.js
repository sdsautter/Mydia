var path = require("path");

module.exports = function(app) {

//user needs to login
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/login.html"));
  });
//after user has logged in. this needs to change to user page.
  app.get('/home', function(req, res) {
        res.render("index")
    })
};
