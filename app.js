let express = require('express');
let todoController = require('./controllers/todoController');

// init app
let app = express();

// Set assets directory
app.use(express.static('public'));

// Fire controllers
todoController(app);

// Listen to requests on port 3000
app.listen(3000);
