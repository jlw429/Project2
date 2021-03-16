// Requiring our Todo model
const db = require('../models');
const passport = require('../config/passport')

module.exports = (app) => {
  //needs the passport.authenticate
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

    //Viewing Current Attendance (the attendance table)
  app.get('/api/attendance/', (req, res) => {
    db.Att.findAll({}).then((attPost) => res.json(attPost));
  });
  app.get('/api/attendance/:id', (req, res) => {
    db.Att.findOne({
      where: {
        id: req.params.id,
      },
    }).then((attPost) => res.json(attPost));
  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', (req, res) => {
    db.Att.destroy({
      where: {
        id: req.params.id,
      },
    }).then((attPost) => res.json(attPost));
  });

  // PUT route for updating posts
  app.put('/api/posts', (req, res) => {
    db.Att.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((attPost) => res.json(attPost));
  });
};
