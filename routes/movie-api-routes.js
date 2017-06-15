var db = require("../models");

module.exports = function (app) {
 //this is all filler for further flushing out of the website. it has not been tested. 
    app.get('/:user', function (req, res) {
            db.User.findAll({
                where: {
                    id: req.body.id
                }
            }).then(function (userData) {
                res.render('user', userData)
            });
        }),

        app.get('/movies/:id', function (req, res) {
            db.Movie.findAll({
                where: {
                    id: req.body.id
                }
            }).then(function (movieData) {
                res.render('movie', movieData)
            });
        }),

        app.get('/music/:id', function (req, res) {
            db.Music.findAll({
                where: {
                    name: req.body.name
                }
            }).then(function (musicData) {
                res.render('music', musicData)
            });
        })

    // POST route for saving a new movie
    app.post("/api/movie", function (req, res) {
        db.Movie.create({
            title: req.body.title,
            imdbId: req.body.imdbId,
            director: req.body.director,
            actors: req.body.actors,
            plot: req.body.plot,
            genre: req.body.genre,
            year: req.body.year,
            user_rating: req.body.user_rating,
            user_comment: req.body.user_comment,
            user_format: req.body.user_format
        }).then(function (dbMovie) {
            console.log(dbMovie);
            res.redirect("/");
        });
    });

};