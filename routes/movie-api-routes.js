// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
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
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
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