const discordAuthRoutes = require('./auth/discordAuth');
const processOrder = require('./process/processOrder');
const googleAuthRoutes = require('./auth/googleAuth');
const githubAuthRoutes = require('./auth/githubAuth');
const orderChange = require('./process/ordersChange');
const { client } = require('./redis/redisClient'); 
const messangRoutes = require('./routes/messang');
const userUpdate = require('./data/user-update');
const userStatus = require('./routes/status');
const imageRoutes = require('./imageRoutes');
const usersRouter = require('./routes/user');
const cartRoutes = require('./cartRoutes');
const artData = require('./data/artData');
const userCart = require('./userCart');
const authRoutes = require('./auth');
const passport = require('passport');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./passport-setup');
const connectDB = require('./db');
connectDB();

const app = express();
const port = process.env.PORT || 3000;

/* Save data to Redis
const saveArtDataToRedis = async (artData) => {
  try {
    if (client.isOpen) {
      await client.set('artData', JSON.stringify(artData));
      console.log('Art data saved to Redis');
    } else {
      console.error('Redis client is not connected');
    }
  } catch (error) {
    console.error('Error saving art data to Redis:', error);
  }
};
*/

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8080'],
  methods: ['*'],
  allowedHeaders: ['*'],
}));

app.use(passport.initialize());

app.use('/', googleAuthRoutes);
app.use('/', githubAuthRoutes);
app.use('/', discordAuthRoutes);
app.use('/api', messangRoutes); 
app.use('/api', processOrder);
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
    //saveArtDataToRedis(artData); 
  })
  .catch((err) => {
    console.error('Error connecting to Redis:', err);
  });

app.get('/', (req, res) => {
  res.send('<h1>Server is running on http://localhost:3000</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
