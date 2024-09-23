const processOrder = require('./process/processOrder');
const discordAuthRoutes = require('./auth/discordAuth');
const googleAuthRoutes = require('./auth/googleAuth');
const githubAuthRoutes = require('./auth/githubAuth');
const messangRoutes = require('./routes/messang');
const userUpdate = require('./data/user-update');
const imageRoutes = require('./imageRoutes');
const usersRouter = require('./routes/user');
const cartRoutes = require('./cartRoutes');
const userCart = require('./userCart');
const authRoutes = require('./auth');
const passport = require('passport');
const express = require('express');
require('./redis/redisClient');
const cors = require('cors');
require('./passport-setup');
require('dotenv').config();

const connectDB = require('./db');
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: ['http://localhost:8080' || 'https://soulswap.netlify.app/'],
  methods: ['*'],
  allowedHeaders: ['*'],
}));

app.use(passport.initialize());

app.use('/', googleAuthRoutes);
app.use('/', githubAuthRoutes);
app.use('/', discordAuthRoutes);

app.use('/api', messangRoutes); 
app.use('/api', processOrder);
app.use('/api', imageRoutes);
app.use('/api', usersRouter);
app.use('/api', authRoutes);
app.use('/api', userUpdate);
app.use('/api', cartRoutes);
app.use('/api', userCart);

app.get('/', (req, res) => {
  res.send('<h1>Server is running on http://localhost:3000</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
