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

const sendOrderNotification = async (email, orderId = "123456", totalPrice = "99.99") => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Order Confirmation #${orderId} from SoulSwap`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Soul Swap</title>
        <style>
          * {
            padding: 0;
            margin: 0;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          body {
            background-color: #e1ebff; /* Цвет фона всего письма */
            padding: 2rem 0;
            font-family: "Comfortaa", sans-serif;
          }
          .container {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            background-color: #ffffff; /* Белый фон для контейнера */
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          header {
            text-align: center;
            margin-bottom: 24px;
          }
          h2 {
            color: hsl(210, 100%, 66%);
            font-size: 24px;
          }
          .badge {
            padding: 4px 6px;
            border-radius: 12px;
            background-color: hsl(214, 59%, 15%);
            color: hsl(210, 100%, 66%);
            display: inline-block;
            margin-right: 8px;
          }
          .text {
            font-size: 18px;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: gray;
            margin-top: 20px;
          }
          .btn {
            display: block;
            width: 100%;
            background-color: rgb(33, 33, 33);
            color: white;
            padding: 10px 0;
            text-align: center;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            margin-bottom: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <img src="https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/logo.png?alt=media&token=57f5b10b-3de2-4761-b191-df053de65ffa" alt="SoulSwap Logo" style="width: 100px; height: auto; margin-bottom: 16px;" />
            <h2>Order Confirmation</h2>
          </header>
          
          <h3 style="text-align: center;">Thank you for choosing SoulSwap; we truly appreciate your support.</h3>
          
          <table width="100%" style="margin-bottom: 24px;">
            <tr>
              <td style="text-align: left;">
                <span class="badge">Order ID:</span>
                <span>#${orderId}</span>
              </td>
              <td style="text-align: right;">
                <span class="badge">Total Price:</span>
                <span>$${totalPrice}</span>
              </td>
            </tr>
          </table>
          
          <a href="https://soulswap.store/orders" class="btn">View Order Details</a>
          
          <h4 style="font-size: 16px; text-align: start; font-weight: 400;">If you have any questions about your order or need further assistance, please feel free to reach out to us. We're here to help!</h4>
          
          <div style="text-align: right;">
            <h5 style="font-weight: bold;">Warm regards,</h5>
            <h5 style="font-weight: bolder; color: rgb(67, 56, 202);">The SoulSwap Team</h5>
          </div>
          
          <div class="footer" style="margin-top: 1rem;">
            &copy; ${new Date().getFullYear()} SoulSwap. All rights reserved.
          </div>
        </div>
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
