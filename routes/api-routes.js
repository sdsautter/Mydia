// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    
    app.get('/splash', function(req, res) {
        res.render("index")
    })

    // app.get('/:user', function(req, res) {
    //     db.User.findAll({
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(function(userData) {
    //         res.render('user', userData)
    //     });
    // }),

    // app.get('/movies/:id', function(req, res) {
    //     db.Movie.findAll({
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(function(movieData) {
    //         res.render('movie', movieData)
    //     });
    // }),

    // app.get('/music/:id', function(req, res) {
    //     db.Music.findAll({
    //         where: {
    //             name: req.body.name
    //         }
    //     }).then(function(musicData) {
    //         res.render('music', musicData)
    //     });
    // })

};