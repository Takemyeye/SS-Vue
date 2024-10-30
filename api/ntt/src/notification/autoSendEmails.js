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

const sendOrderNotification = async (email, orderId, totalPrice) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Order Confirmation #${orderId} from SoulSwap`,
    html: `
    <!DOCTYPE html>
    <html lang="">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Soul Swap</title>
       <style>
        body {
            width: 100%;
            font-family: 'Trebuchet MS', Helvetica, sans-serif;
            margin: 0;
        }
        header {
          width: 100%;
          text-alight: center;
          padding: 0 1rem;
        }
        footer {
          width: 100%;
          border-top: 1px solid rgba(0, 0, 0, 0.315);
          padding: 0 1rem;
          border-radius: 8px;
          text-alight: center;
        }
        .text {
          display: flex;
          align-items: start;
          justify-content: space-between;
          flex-direction: row;
        }
        main {
          width: 100%;
          padding:0 1rem;
          display: flex;
          align-items: start;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
        }
       </style>
      </head>
      <body>
        <main>
          <header>
            <h2>Order Confirmation</h2>
          </header>
          <div class="text">
            <div class="badge">Order ID: </div>
            <span>${orderId}</span>
          </div>
          <div class="text">
            <div class="badge">Total Price: </div>
            <span>$${totalPrice}</span>
          </div>
          <div class="container">
            <h4>Thank you for choosing SoulSwap we truly appreciate your support.</h4>
            <h4>If you have any questions about your order or need further assistance, please feel free to reach out to us. We're here to help!</h4>
            <h5>Warm regards,</h5>
            <h5>The SoulSwap Team</h5>
            <footer>
              &copy; ${new Date().getFullYear()} SoulSwap. All rights reserved.
            </footer>
          </div>
        </main>
      </body>
    </html>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Order notification sent to ${email}`);
  } catch (error) {
    console.error(`Error sending order notification to ${email}:`, error);
  }
};

module.exports = { sendMarketingEmail, sendOrderNotification };
