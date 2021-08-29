const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = (req, res, next) => {
	const { authorization } = req.headers;
	// authorization === 'Bearer wlksndfilakdfhdlkffdf'
	if (!authorization)
		return res.status(401).send({ error: 'You must be logged in' });

	const token = authorization.replace('Bearer ', '');
	jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
		// Handle error
		if (err)
			return res.status(401).send({ error: 'You must be logged in' });
		// Get user id
		const { userId } = payload;
		// Fetch user with the user id
		const user = await User.findById(userId);
		req.user = user;
		next();
	});
};
