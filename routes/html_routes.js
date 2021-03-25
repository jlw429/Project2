const sgMail = require('@sendgrid/mail');
require('dotenv').config();
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
    res.render('signup');
  });

  //loads homepage
  app.get('/welcome', (req, res) => {
    res.render('welcome');
  });

  //loads student page
  app.get('/student', (req, res) => {
    fetch(
      `https://msu-project-two.herokuapp.com/api/student`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success in getting posts:', data);
        res.render('student', { data: data.stu });
      })
      .catch((error) => console.error('Error:', error));
  });

  //loads attendance page
  app.get('/attendance', (req, res) => {
    fetch(`https://msu-project-two.herokuapp.com/attendance`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success in getting posts:', data);
        res.render('attendance', { data: data.att });
      })
      .catch((error) => console.error('Error:', error));
  });

  //loads logout page
  app.get('/logout', (req, res) => {
    res.render('logout');
  });

  app.post('/send_email', (req, res) => {
    console.log(req.body);
    let recipient = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: recipient, // Change to your recipient
      from: 'jlw00329@gmail.com', // Change to your verified sender
      subject: subject,
      text: message,
    };
    sgMail.send(msg, (err, info) => {
      if (err) {
        console.log('Email not Sent');
      } else {
        console.log('Your Email was Sent');
      }
    });
    res.redirect('/attendance');
  });
};
