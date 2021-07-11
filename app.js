const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.port || 3000;

connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
