const { createClient } = require('redis');
require('dotenv').config();

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

const connectToRedis = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error('Error connecting to Redis:', error);
  }
};

module.exports = {
  client,
  connectToRedis,
};
