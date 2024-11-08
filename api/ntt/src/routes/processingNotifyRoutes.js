const { sendProcessingOrder } = require('../notification/emails/processingEmails');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.post('/processing', async (req, res) => {
  const { token } = req.body;

  try {
    const user = await User.findOne({ token });
    if (!user) {
      console.log( `User not found with token`, token )
      return res.status(404).json({ message: `User not found`});
    }

    const name = user.username;
    const email = user.email;
    await sendProcessingOrder(email, name);

  } catch (error) {
    console.error( `да ебанный рот:`, error );
  }

});

module.exports = router;
