const db = require('../models/db.js');

exports.getPosts = (req, res) => {
	const sqlQuery = req.query.category
		? 'SELECT * FROM posts WHERE category = ?'
		: 'SELECT * FROM posts';

	db.query(sqlQuery, [req.query.category], (err, data) => {
		if (err) return res.json(err);

		return res.status(200).json(data);
	});
};

exports.getSinglePost = (req, res) => {
	res.json('From controller ;3');
};

exports.addPost = (req, res) => {
	res.json('From controller ;3');
};

exports.updatePost = (req, res) => {
	res.json('From controller ;3');
};

exports.deletePost = (req, res) => {
	res.json('From controller ;3');
};
