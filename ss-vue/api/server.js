const processOrder = require('./process/processOrder');
const discordAuthRoutes = require('./auth/discordAuth');
const googleAuthRoutes = require('./auth/googleAuth');
const githubAuthRoutes = require('./auth/githubAuth');
const imageRoutes = require('./imageRoutes');
const usersRouter = require('./routes/user');
const cartRoutes = require('./cartRoutes');
const userCart = require('./userCart');
const authRoutes = require('./auth');
const passport = require('passport');
const express = require('express');
const path = require('path');
const cors = require('cors');
require('./passport-setup');
require('dotenv').config();

const connectDB = require('./db');
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://soulswap.netlify.app/',
  methods: ['*'],
  allowedHeaders: ['*'],
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/art', express.static(path.join(__dirname, '../dist/art')));

app.use(passport.initialize());

app.use('/', googleAuthRoutes);
app.use('/', githubAuthRoutes);
app.use('/', discordAuthRoutes);

app.use('/api', processOrder);
app.use('/api', imageRoutes);
app.use('/api', usersRouter);
app.use('/api', authRoutes);
app.use('/api', cartRoutes);
app.use('/api', userCart);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
