// Dependencies
const path = require('path');
//for passport
const isAuthenticated = require('../config/isAuthenticated.js');

// Routes
module.exports = (app) => {
  app.get('/', function (req, res) {
    //passport---->
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('../public/index.html');
    }
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/login', function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('../public/index.html');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  app.get('/index', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  //<---------end of passport routes

  //loads homepage
  app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  //loads student page
  app.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/student.html'));
  });

  //loads attendance page
  app.get('/attendance', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/attendance.html'));
  });
};
