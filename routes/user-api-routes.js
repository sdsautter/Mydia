var db = require('../models');

module.exports = function(app) {
// This will create a user.
    app.post('/api/user', function (req, res) {
        db.User.create({
            user_name: req.body.newusername,
            password: req.body.newpassword,
            email: req.body.newemail
        }).then(function(userData) {
            res.json(userData);
        });
    });
//This is our login logic. We search for the user in the database and retreive their information.
//Potentital for further change- encryption of password. 
    app.get('/api/user', function(req, res) {
        var userCheck = req._parsedOriginalUrl.query;
        db.User.findOne({
            where: {
                user_name: userCheck
            }
        }).then(function(userData) {
            res.json(userData)
        })
    })
};