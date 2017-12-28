const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const urlencodedParser = bodyParser.urlencoded({extended: false});

// Connect to the database
mongoose.connect('mongodb://test:test@ds131697.mlab.com:31697/stuff-to-watch', {useMongoClient: true});

// Create schema for our database
const stwSchema = new mongoose.Schema({
	item: String
});

// Defining model for our app
const stw = mongoose.model('stw', stwSchema);

module.exports = function (app) {
	app.get('/', (req, res) => {
		// Inject the data coming from db into the view
		stw.find({}, (err, data) => {
			if (err) {
				throw err;
			}
			res.render('stw', {list: data});
		});
	});

	app.post('/', urlencodedParser, (req, res) => {
		// Get new submitted data from the view and update db
		const newList = stw(req.body).save((err, data) => {
			if (err) {
				throw err;
			}
			res.json(data);
		});
	});

	app.delete('/:item', (req, res) => {
		// Deleted the requested item from db
		stw.find({item: req.params.item.replace(/\-/g, ' ')}).remove((err, data) => {
			if (err) {
				throw err;
			}
			res.json(data);
		});
	});
};
