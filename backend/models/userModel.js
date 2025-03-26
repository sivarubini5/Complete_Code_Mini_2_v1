const db = require('../config/db');

exports.createUser = (email, password, callback) => {
    db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password], callback);
};

exports.findUserByEmail = (email, callback) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], callback);
};
