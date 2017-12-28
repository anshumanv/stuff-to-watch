const express = require('express');
const stwController = require('./controllers/stw-controller');

// Init app
const app = express();

// Set templating engine for the app
app.set('view engine', 'ejs');

// Set assets directory
app.use(express.static('public'));

// Fire controllers
stwController(app);

// Listen to requests on a port
app.listen(process.env.PORT || 3000);
