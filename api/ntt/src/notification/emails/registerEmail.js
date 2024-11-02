const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendRegisterNtt = async (email) => {
  const currentDateTime = new Date();
  
  const formattedDate = `${String(currentDateTime.getDate()).padStart(2, '0')}/${
    String(currentDateTime.getMonth() + 1).padStart(2, '0')}/${
    String(currentDateTime.getFullYear()).slice(-2)
  }`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Successful Login Notification from SoulSwap`,
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
            background-color: #e1ebff;
            padding: 2rem 0;
            font-family: "Comfortaa", sans-serif;
          }
          .container {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            background-color: #ffffff;
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
            <h2>Login Notification</h2>
          </header>
          
          <h3 style="text-align: center;">Thank you for using SoulSwap; we truly appreciate your support.</h3>
          
          <table width="100%" style="margin-bottom: 24px;">
            <tr>
              <td style="text-align: left;">
                <span class="badge">Email: </span>
                <span>${email}</span>
              </td>
              <td style="text-align: left;">
                <span class="badge">Sent at: </span>
                <span>${formattedDate}</span>
              </td>
            </tr>
          </table>
          
          <a href="https://soulswap.store/profile" class="btn">View Your Profile</a>
          
          <h4 style="font-size: 16px; text-align: start; font-weight: 400;">If you did not request this login, please contact support immediately. We're here to help!</h4>
          
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
    console.log(`Register notification sent to ${email}`);
  } catch (error) {
    console.error(`Error sending register notification to ${email}:`, error);
  }
};

module.exports = { sendRegisterNtt };
