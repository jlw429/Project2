// Requiring necessary npm packages
const express = require('express');
const session = require('express-session');


// Requiring passport as we've configured it
const passport = require('./config/passport');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require('./models');

//handlebars engine
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Creating express app 
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring routes
require('./routes/html-routes.js')(app);
require('./routes/class_api_routes.js')(app);
require('./routes/student_api_routes.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
