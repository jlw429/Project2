const db = require('../models');
const passport = require('../config/passport');


module.exports = (app) => {
    app.post('/api/login', passport.authenticate('local'), function (req, res) {
      res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post('/api/signup', function (req, res) {
      db.User.create({
        email: req.body.email,
        password: req.body.password,
      })
        .then(function () {
          res.redirect(307, '/api/login');
        })
        .catch(function (err) {
          res.status(401).json(err);
        });
    });

    // Route for logging user out
    app.get('/logout', function (req, res) {
      req.logout();
      res.redirect('/');
    });
};