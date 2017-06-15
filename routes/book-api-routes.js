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
    // POST route for saving a new movie
    app.post("/api/book", function (req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Book.create({
            title: req.body.title,
            google_id: req.body.google_id,
            authors: req.body.authors,
            publisher: req.body.publisher,
            description: req.body.description,
            published_date: req.body.published_date,
            cover: req.body.cover,
            user_rating: req.body.user_rating,
            user_comment: req.body.user_comment,
            user_format: req.body.user_format
        }).then(function (dbBook) {
            var redirectUrl = res.req.headers.referer + "#";
            res.redirect(redirectUrl);
        });
    });

};