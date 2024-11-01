const Notification = require('../models/UserNotification');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Настройка nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMarketingEmail = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Discover Stunning Art!',
    text: `Hello!

Are you a fan of manga and anime? We have something special just for you!

At SoulSwap, we offer a unique collection of beautifully crafted art pieces inspired by your favorite series. From vibrant prints to exclusive limited editions, our artwork captures the essence of the worlds you love.

✨ **Why Choose Our Art?**
- High-quality prints on premium paper
- Unique designs created by talented artists
- Perfect for home decor, gifts, or personal collections

Explore our collection and find the perfect piece to elevate your space. Don't miss out on exclusive offers and new arrivals—subscribe to our newsletter!

Visit us at https://soulswap.store to browse our gallery.

Thank you for supporting local artists!

Best regards,
The SoulSwap Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Marketing email sent to ${email}`);
  } catch (error) {
    console.error(`Error sending marketing email to ${email}:`, error);
  }
};

const sendEmails = async () => {
  try {
    const users = await Notification.find({});

    await Promise.all(users.map(async (user) => {
      const { email, marketingEmails } = user;

      const tasks = [];

      if (marketingEmails) {
        tasks.push(sendMarketingEmail(email));
      }
      await Promise.all(tasks);
      }));
      } catch (error) {
        console.error('Ошибка получения пользователей или отправки писем:', error);
      }
    }

setInterval(sendEmails, 1 * 60 * 1000);

module.exports = { sendMarketingEmail };
