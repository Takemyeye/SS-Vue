const connectDB = require('./data/db');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//routes
const notificationRoutes = require('./routes/notificationRoutes');

connectDB();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ['http://localhost:8080', 'https://soulswap.store'],
  methods: ['*'],
  allowedHeaders: ['*'],
}));

app.use('/ntt', notificationRoutes);

require('./notification/autoSendEmails');

app.get('/', (req, res) => {
  res.send('<h1>Server is running on http://localhost:3000</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
