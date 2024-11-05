const { client } = require('../redis/redisClient');
const  artist  = require('../data/artist');
const express = require('express');
const router = express.Router();

router.get('/artists', async (req, res) => {
  const today = new Date().toLocaleDateString('en-GB');

  const cacheData = await client.get('artistCache');

  let artistIndex = 0;

  if (!cacheData) {
    artistIndex = 0;
    await client.set('artistCache', JSON.stringify({ lastArtistUpdate: today, artistIndex }));
  } else {
    const { lastArtistUpdate, artistIndex: currentArtistIndex } = JSON.parse(cacheData);
    
    if (lastArtistUpdate !== today) {
      artistIndex = (currentArtistIndex + 1) % 5;
      await client.set('artistCache', JSON.stringify({ lastArtistUpdate: today, artistIndex }));
    } else {
      artistIndex = currentArtistIndex;
    }
  }

  return res.json(artist[Object.keys(artist)[artistIndex]]);
});

module.exports = router;
