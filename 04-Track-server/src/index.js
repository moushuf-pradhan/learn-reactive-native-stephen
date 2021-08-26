const express = require('express');
const mongoose = require('mongoose');
// Imports
import authRoutes from './routes/authRoutes';
// Create an app object
const app = express();

app.use(authRoutes);

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

app.get('/', (req, res) => {
	res.send('Hi there !');
});

app.listen(3002, () => {
	console.log('Listening on Port 3002');
});
