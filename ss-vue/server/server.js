const express = require('express');
const path = require('path');
const artData = require('./data/artData');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/art', express.static(path.join(__dirname, '../dist/art')));

app.get('/api/images', (req, res) => {
  const category = req.query.category;
  
  try {
    let images;

    if (category && artData[category]) {
      // Возвращаем изображения для выбранной категории
      images = artData[category].map(item => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        subtitle: item.subtitle
      }));
    } else {
      // Возвращаем все изображения, если категория не указана или не существует
      images = artData.all.map(item => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        subtitle: item.subtitle
      }));
    }
    
    res.json(images);
  } catch (error) {
    console.error('Error fetching images data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
