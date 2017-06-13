var db = require('../models');

module.exports = function(app) {
    app.post('/api/user', function (req, res) {
        db.User.create({
            user_name: req.body.newusername,
            password: req.body.newpassword,
            email: req.body.newemail
        }).then(function(userData) {
            res.json(userData);
        });
    });
};