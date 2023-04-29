const db = require('../models/db.js');
const jwt = require('jsonwebtoken');

exports.getPosts = (req, res) => {
	const sqlQuery = req.query.category
		? 'SELECT * FROM posts WHERE category = ?'
		: 'SELECT * FROM posts';

	db.query(sqlQuery, [req.query.category], (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

exports.getSinglePost = (req, res) => {
	const sqlQuery =
		'SELECT `username`, `title`, `description`, p.img, u.img AS userImage, `category`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?';

	db.query(sqlQuery, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

exports.addPost = (req, res) => {
	res.json('From controller ;3');
};

exports.updatePost = (req, res) => {
	res.json('From controller ;3');
};

exports.deletePost = (req, res) => {
	const token = req.cookies.access_token;

	if (!token) return res.status(401).json('Not authenticated');

	jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
		if (err) return res.status(403).json('Token is not valid!');

		const postId = req.params.id;

		const sqlQuery = 'DELETE FROM posts WHERE `id` = ? AND `uid` = ?';

		db.query(sqlQuery, [postId, userInfo.id], err => {
			if (err) return res.status(403).json('You can delete only your post!');

			return res.json('Post has been deleted!');
		});
	});
};
