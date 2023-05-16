const db = require('../models/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
	const sqlQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';

	db.query(sqlQuery, [req.body.username, req.body.email], (err, data) => {
		if (err) return res.json(err);

		if (!req.body.username)
			return res.status(409).json('You need to add an username!');
		if (!req.body.email)
			return res.status(409).json('You need to add an email!');
		if (!req.body.password)
			return res.status(409).json('You need to add a password!');

		if (data.length) return res.status(409).json('User already exists!');

		// Hash the password and create an user.
		const salt = bcrypt.genSaltSync(10);
		const hashPassword = bcrypt.hashSync(req.body.password, salt);
		// -----------------------------------------------------------

		const sqlQuery =
			'INSERT INTO users(`username`, `email`, `password`) VALUES (?)';

		const values = [req.body.username, req.body.email, hashPassword];

		db.query(sqlQuery, [values], err => {
			if (err) return res.json(err);

			return res.status(200).json('User has been created.');
		});
	});
};

exports.login = (req, res) => {
	const sqlQuery = 'SELECT * FROM users WHERE username = ?';

	db.query(sqlQuery, [req.body.username], (err, data) => {
		if (err) return res.json(err);

		if (!req.body.username)
			return res.status(409).json('You need to add an username!');
		if (!req.body.password)
			return res.status(409).json('You need to add a password!');

		if (!data.length) return res.status(404).json('User not found!');

		const userData = data[0];
		const { password, ...other } = userData;

		// Check password
		const isPasswordCorrect = bcrypt.compareSync(req.body.password, password);

		if (!isPasswordCorrect)
			return res.status(400).json('Wrong username or password!');
		// -----------------------------------------------------------

		const token = jwt.sign({ id: other.id }, process.env.JWT_KEY);

		res
			.cookie('access_token', token, {
				httpOnly: true,
				sameSite: 'lax',
				secure: true
			})
			.status(200)
			.json(other);
	});
};

exports.logout = (req, res) => {
	res
		.clearCookie('access_token', {
			httpOnly: true,
			sameSite: 'none',
			secure: true
		})
		.status(200)
		.json('User has been logged out.');
};
