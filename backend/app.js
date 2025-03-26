
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});
app.use('/api/auth', authRoutes);

module.exports = app;
