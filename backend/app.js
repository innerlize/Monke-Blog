require('dotenv').config();
const cookieParser = require('cookie-parser');
const multer = require('multer');
const express = require('express');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/users.js');
const postRoutes = require('./routes/posts.js');

const app = express();

// --------------------------------------------------

app.use(express.json());
app.use(cookieParser());

// --------------------------------------------------

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '../frontend/public/uploads/');
	},

	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	}
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
	const file = req.file;

	res.status(200).json(file?.filename);
});

// --------------------------------------------------

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// --------------------------------------------------

module.exports = app;
