// Requiring necessary npm packages
const express = require('express');
const session = require('express-session');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// Requiring passport as we've configured it
const passport = require('./config/passport');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require('./models');

//handlebars engine
const app = express();
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.use(express.static('public'));

// app.get('/', (req, res)=> {
//   res.render('index');
// });

// app.get('/signup', (req, res)=> {
//   res.render('signup');
// });

// app.get('/welcome', (req, res)=> {
//   res.render('welcome');
// });

// app.get('/logout', (req, res)=> {
//   res.render('logout');
// });

// app.get('/attendance', (req, res)=> {
//   res.render('attendance');
// });

// app.get('/student', (req, res)=> {
//   res.render('student');
// });

// Creating express app

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring routes
require('./routes/html_routes.js')(app);
require('./routes/att_api_routes.js')(app);
require('./routes/student_api_routes.js')(app);
require('./routes/passport_api_routes')(app);

//SendGrid Email

// sgMail.setApiKey(process.env.SENDGRID_KEY);
// const msg = {
//   to: 'jlw00329@gmail.com', // Change to your recipient
//   from: 'jlw00329@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg, (err, info) => {
//   if (err) {
//     console.log('Email not Sent');
//   } else {
//     console.log('Your Email was Sent');
//   }
// });

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(
      `"Listening on port 8080. Visit http://localhost:8080/ in your browser.", PORT, PORT)`
    )
  );
});
