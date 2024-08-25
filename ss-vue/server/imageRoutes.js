const express = require('express');
const router = express.Router();
const artData = require('./data/artData');

router.get('/images', (req, res) => {
const category = req.query.category;
  
  try {
    let images;

    if (category && artData[category]) {
      images = artData[category].map(item => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        subtitle: item.subtitle
      }));
    } else {
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

module.exports = router;
