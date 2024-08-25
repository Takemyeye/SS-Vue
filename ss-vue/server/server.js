const express = require('express');
const path = require('path');
const cors = require('cors'); // Импортируем cors
const imageRoutes = require('./imageRoutes');
const cartRoutes = require('./cartRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Настройка CORS
app.use(cors({
  origin: '*',
  methods: ['*'],
  allowedHeaders: ['*'],
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/art', express.static(path.join(__dirname, '../dist/art')));

app.use('/api', imageRoutes);
app.use('/api', cartRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
