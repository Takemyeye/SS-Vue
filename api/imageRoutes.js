const { client } = require('./redis/redisClient');
const express = require('express');
const router = express.Router();

router.get('/images', async (req, res) => {
  try {
    // Get artData from Redis
    const artData = await client.get('artData');
    
    // Check if artData is retrieved
    if (!artData) {
      return res.status(404).send('Art data not found in Redis');
    }

    // Parse the JSON data
    const parsedArtData = JSON.parse(artData);

    // Map the parsed data to the desired structure
    const images = parsedArtData.all.map(item => ({
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
