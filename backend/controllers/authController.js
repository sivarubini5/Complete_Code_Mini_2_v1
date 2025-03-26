const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');
const User = require('../models/userModel');

exports.register = (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: err.message });
        User.createUser(email, hash, (err) => {
            if (err) return res.status(400).json({ error: 'User already exists' });
            res.json({ message: 'User registered successfully' });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findUserByEmail(email, (err, user) => {
        if (err || !user) return res.status(400).json({ error: 'Invalid email or password' });
        bcrypt.compare(password, user.password, (err, result) => {
            if (!result) return res.status(400).json({ error: 'Invalid email or password' });
            const token = jwt.sign({ id: user.id }, secret);
            res.json({ token });
        });
    });
};