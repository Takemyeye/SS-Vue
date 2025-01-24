const axios = require('axios');

const registerNtt = async (token) => {
  try {
    const response = await axios.post('http://soulswap.store/ntt/register', { token }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    console.error('самоотсос не удался ', error.message);
    throw error;
  }
};

module.exports = { registerNtt };
