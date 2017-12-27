let express = require('express');

// init app
let app = express();

// Set assets directory
app.use(express.static('public'));

// Routing for index page
app.get('/', function(req, res) {
	res.send('Hey there');
});

// Listen to requests on port 3000
app.listen(3000);
