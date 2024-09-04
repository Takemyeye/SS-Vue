import { reactive, watch } from 'vue';

const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export const cartState = reactive({
  cartItems: savedCartItems,
  totalItems: savedCartItems.length, 
});

watch(
  () => cartState.cartItems,
  (newCartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newCartItems)); 
  },
  { deep: true }
);

export function updateTotalItems() {
  cartState.totalItems = cartState.cartItems.length;
}

export function addToCart(item) {
  cartState.cartItems.push(item);
  updateTotalItems();
}

export function removeFromCart(id) {
  cartState.cartItems = cartState.cartItems.filter((item) => item.id !== id);
  updateTotalItems();
}

export function clearCart() {
  cartState.cartItems = [];
  updateTotalItems();
  localStorage.removeItem('cartItems'); // Удаляем также из localStorage
}
