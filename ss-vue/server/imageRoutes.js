const artData = require('./data/artData');
const express = require('express');
const router = express.Router();

router.get('/images', (req, res) => {
  
  try {
    let images;
      images = artData.all.map(item => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        subtitle: item.subtitle,
        titleAnime: item.titleAnime
      }));
    
    
    res.json(images);
  } catch (error) {
    console.error('Error fetching images data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
