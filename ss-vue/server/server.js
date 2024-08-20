const express = require('express');
const path = require('path');
const imageRoutes = require('./imageRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/art', express.static(path.join(__dirname, '../dist/art')));

app.use('/api', imageRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
