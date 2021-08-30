// Imports
require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

// Create an app object
const app = express();

// Handle JSON data
app.use(bodyParser.json());
// Handle routes
app.use(authRoutes);
app.use(trackRoutes);

// Mongo URI
const mongoURI =
	'mongodb+srv://admin:admin@react-native-tracker-wi.hnbjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Connect to Mongo instance
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// On Mongo connection success
mongoose.connection.on('connected', () => {
	console.log('Connected to mongo instance');
});
// On Mongo connection failure
mongoose.connection.on('error', err => {
	console.error('Failed to connect to mongo instance', err);
});

app.get('/', requireAuth, (req, res) => {
	res.send(`Your email: ${req.user.email}`);
});

app.listen(3002, () => {
	console.log('Listening on Port 3002');
});
