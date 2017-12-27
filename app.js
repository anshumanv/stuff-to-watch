let express = require('express');
let stwController = require('./controllers/stwController');

// init app
let app = express();

// Set templating engine for the app
app.set('view engine', 'ejs');

// Set assets directory
app.use(express.static('public'));

// Fire controllers
stwController(app);

// Listen to requests on port 3000
app.listen(3000);
