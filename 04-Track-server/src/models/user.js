const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create user Schema
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre('save', function (next) {
	const user = this;
	if (!user.isModified('password')) return next();

	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function (candidatePassword) {
	const user = this;
	return new Promise(function (resolve, reject) {
		bcrypt.compare(
			candidatePassword,
			user.password,
			function (err, isMatch) {
				if (err) return reject(err);

				if (!isMatch) return reject(false);

				resolve(true);
			}
		);
	});
};

mongoose.model('User', userSchema);
