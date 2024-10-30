const discordAuthRoutes = require('./auth/discordAuth');
const processOrder = require('./process/processOrder');
const googleAuthRoutes = require('./auth/googleAuth');
const githubAuthRoutes = require('./auth/githubAuth');
const orderChange = require('./process/ordersChange');
const reviewRoutes = require('./routes/reviewRoutes');
const imageRoutes = require('./routes/imageRoutes');
const { client } = require('./redis/redisClient'); 
const messangRoutes = require('./routes/messang');
const cartRoutes = require('./routes/cartRoutes');
const userUpdate = require('./data/user-update');
const userStatus = require('./routes/status');
const usersRouter = require('./routes/user');
const connectDB = require('./data/db');
const userCart = require('./userCart');
const authRoutes = require('./auth');
const passport = require('passport');
const express = require('express');
const cors = require('cors');
require('./passport-setup');
require('dotenv').config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ['https://soulswap.store', 'http://localhost:8080'],
  methods: ['*'],
  allowedHeaders: ['*'],
}));

app.use(passport.initialize());

app.use('/api', discordAuthRoutes);
app.use('/api', googleAuthRoutes);
app.use('/api', githubAuthRoutes);
app.use('/api', messangRoutes); 
app.use('/api', processOrder);
app.use('/api', reviewRoutes);
app.use('/api', orderChange);
app.use('/api', imageRoutes);
app.use('/api', usersRouter);
app.use('/api', userStatus);
app.use('/api', authRoutes);
app.use('/api', userUpdate);
app.use('/api', cartRoutes);
app.use('/api', userCart);

client.connect()
  .then(() => {
    console.log('Redis connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to Redis:', err);
  });

app.get('/', (req, res) => {
  res.send('<h1>Server is running on https://soulswap.store</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
