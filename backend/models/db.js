const mysql = require('mysql2');

const pool = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DATABASE
});

module.exports = pool;
