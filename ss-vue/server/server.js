const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const googleAuthRoutes = require('./googleAuth'); // Ваш новый файл для Google OAuth
const imageRoutes = require('./imageRoutes');
const usersRouter = require('./routes/user')
const cartRoutes = require('./cartRoutes');
const userCart = require('./userCart');
require('dotenv').config();
require('./passport-setup'); // Настройка passport для Google OAuth

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors({
   origin: 'http://localhost:8080',
  methods: ['*'],
  allowedHeaders: ['*'],
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/art', express.static(path.join(__dirname, '../dist/art')));

// Инициализация passport
app.use(passport.initialize());

// Google OAuth маршруты
app.use('/', googleAuthRoutes); // Используйте новый маршрут для Google OAuth

// Ваши существующие API маршруты
app.use('/api', imageRoutes);
app.use('/api', usersRouter);
app.use('/api', cartRoutes);
app.use('/api', userCart);

// Обработка всех остальных запросов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
