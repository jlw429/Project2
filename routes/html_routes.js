const fetch = require('node-fetch');

// Dependencies
const path = require('path');
//for passport
const isAuthenticated = require('../config/isAuthenticated.js');

// Routes
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/signup', function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect('../public/index.html');
    }
    res.render('signup');
  });

  //loads homepage
  app.get('/welcome', (req, res) => {
    res.render('welcome');
  });

  //loads student page
  app.get('/student', (req, res) => {
    res.render('student');
  });

  //loads attendance page
  app.get('/attendance', (req, res) => {
    fetch(`http://localhost:8080/api/attendance`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success in getting posts:', data);
        res.render('attendance', data);
      })
      .catch((error) => console.error('Error:', error));
  });

  //loads logout page
  app.get('/logout', (req, res) => {
    res.render('logout');
  });
};
