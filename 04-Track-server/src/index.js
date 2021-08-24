const express = require('express');
// Create an app object
const app = express();

app.get('/', (req, res) => {
	res.send('Hi there !');
});

app.listen(3002, () => {
	console.log('Listening on Port 3002');
});
