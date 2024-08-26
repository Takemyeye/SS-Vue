const express = require('express');
const router = express.Router();

let cart = []; 

router.post('/cart/add', (req, res) => {
  const { id, price, title } = req.body;
  if (id && price && title) {
    cart.push({ id, price, title });
    res.status(200).json({ message: 'Item added to cart', cart });
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
