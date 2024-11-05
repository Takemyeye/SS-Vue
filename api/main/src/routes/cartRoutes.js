const express = require('express');
const router = express.Router();

let cart = []; 

router.post('/cart/add', (req, res) => {
  const { id, price, title, subtitle, image } = req.body;
  if (id && price && title && subtitle && image) {
    cart.push({ id, price, title, subtitle, image });
  } else {
    res.status(400).json({ message: 'Invalid item data' });
  }
});

router.get('/cart', (req, res) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  res.status(200).json({ totalPrice, items: cart });
});

router.post('/cart/clear', (req, res) => {
  cart = []; // Очищаем корзину
  res.status(200).json( 'Cart cleared' );
});

module.exports = router;
