export function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Проверка на дублирование элементов
  const itemExists = cart.some(cartItem => cartItem.id === item.id);
  if (!itemExists) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Отправка данных на сервер
  fetch('http://localhost:3000/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then(response => {
    if (response.ok) {
      console.log('Item added to cart successfully');
    } else {
      console.error('Failed to add item to cart');
    }
  });
}

export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

export function clearCart() {
  localStorage.removeItem('cart');

  fetch('http://localhost:3000/cart/clear', {
    method: 'POST',
  }).then(response => {
    if (response.ok) {
      console.log('Cart cleared successfully');
    } else {
      console.error('Failed to clear cart');
    }
  });
}
