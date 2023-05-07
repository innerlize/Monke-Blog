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
		'SELECT p.id, `username`, `title`, `description`, p.img, u.img AS userImage, `category`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?';

	db.query(sqlQuery, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

exports.addPost = (req, res) => {
	const token = req.cookies.access_token;

	if (!token) return res.status(401).json('Not authenticated');

	jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
		if (err) return res.status(403).json('Token is not valid!');

		if (!req.body.title)
			return res.status(409).json('You need to add a title!');
		if (!req.body.description)
			return res.status(409).json('You need to add a description!');
		if (!req.body.img) return res.status(409).json('You need to add an image!');
		if (!req.body.category)
			return res.status(409).json('You need to add a category!');

		const sqlQuery =
			'INSERT INTO posts (`title`, `description`, `img`, `date`, `uid`, `category`) VALUES (?)';

		const values = [
			req.body.title,
			req.body.description,
			req.body.img,
			req.body.date,
			userInfo.id,
			req.body.category
		];

		db.query(sqlQuery, [values], err => {
			if (err) return res.status(500).json(err);

			return res.json('Post has been created!');
		});
	});
};

exports.updatePost = (req, res) => {
	const token = req.cookies.access_token;

	if (!token) return res.status(401).json('Not authenticated');

	jwt.verify(token, process.env.JWT_KEY, (err, userInfo) => {
		if (err) return res.status(403).json('Token is not valid!');

		const postId = req.params.id;

		const sqlQuery =
			'UPDATE posts SET `title`=?, `description`=?, `img`=?, `category`=? WHERE `id` = ? AND `uid` = ?';

		const values = [
			req.body.title,
			req.body.description,
			req.body.img,
			req.body.category
		];

		db.query(sqlQuery, [...values, postId, userInfo.id], err => {
			if (err) return res.status(500).json(err);

			return res.json('Post has been updated!');
		});
	});
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
