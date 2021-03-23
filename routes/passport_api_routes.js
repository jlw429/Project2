const db = require('../models');
const passport = require('../config/passport');

module.exports = (app) => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
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

// app.get("/api/user_data", (req, res) => {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });
//   app.get("/api/user/:id", (req, res) => {
//     // Find one user with the id in req.params.id and return them to the user with res.json
//     db.User.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(dbuser => res.json(userdb));
//   });
//   app.post("/api/userdata", (req, res) => {
//     // Create an Author with the data available to us in req.body
//     console.log(req.body);
//     db.userData.create(req.body).then(dbuserData => res.json(dbuserData));
  // });
};

