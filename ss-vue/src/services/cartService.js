export function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const itemExists = cart.some(cartItem => cartItem.id === item.id);
  if (!itemExists) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

export function clearCart() {
  localStorage.removeItem('cart');
}
