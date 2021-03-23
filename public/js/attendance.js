// Function to grab posts from the database

const getPosts = (category) => {
  fetch(`/api/attendance/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in getting posts:', data);
      // posts = data;
    })
    .catch((error) => console.error('Error:', error));
};
// getPosts();

// //SendGrid Email
// function email() {
//   const sgMail = require('@sendgrid/mail');
//   require('dotenv').config();
//   sgMail.setApiKey(process.env.SENDGRID_KEY);
//   const msg = {
//     to: 'jlw00329@gmail.com', // Change to your recipient
//     from: 'jlw00329@gmail.com', // Change to your verified sender
//     subject: 'Question About attendance',
//     text: 'and easy to do anywhere, even with Node.js',
//   };
//   sgMail.send(msg, (err, info) => {
//     if (err) {
//       console.log('Email not Sent');
//     } else {
//       console.log('Your Email was Sent');
//     }
//   });
// }

// email();
