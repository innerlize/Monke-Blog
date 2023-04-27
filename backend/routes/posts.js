const express = require('express');
const {
	addPost,
	getPosts,
	getSinglePost,
	updatePost,
	deletePost
} = require('../controllers/post.js');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', addPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
