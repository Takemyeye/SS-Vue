const { client } = require('../redis/redisClient'); 
const artData = require('../data/artData');
const express = require('express');
const router = express.Router();

router.get('/images', async (req, res) => {
  try {
    const cachedArtData = await client.get('artData');

    if (cachedArtData) {
      return res.json(JSON.parse(cachedArtData));
    } 
    
    if (!artData || !artData.all || artData.all.length === 0) {
      return res.status(404).send('Art data not found');
    }

    await client.set('artData', JSON.stringify(artData.all));
    
    res.json(artData.all);
    
  } catch (error) {
    console.error('Error fetching images data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
