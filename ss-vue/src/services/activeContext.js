import { reactive, watch } from 'vue';

const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export const cartState = reactive({
  cartItems: savedCartItems,
  totalItems: savedCartItems.length, 
});

watch(
  () => cartState.cartItems,
  (newCartItems) => {
    console.log("Текущие товары в корзине:", newCartItems);
    console.log("Общее количество товаров в корзине:", cartState.totalItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems)); 
  },
  { deep: true }
);

export function updateTotalItems() {
  cartState.totalItems = cartState.cartItems.length;
  console.log("Обновлено количество товаров в корзине:", cartState.totalItems);
}

export function addToCart(item) {
  cartState.cartItems.push(item);
  updateTotalItems();
  console.log("Добавлен товар в корзину:", item);
}

export function removeFromCart(id) {
  cartState.cartItems = cartState.cartItems.filter((item) => item.id !== id);
  updateTotalItems();
  console.log(`Удален товар с id ${id} из корзины.`);
}

export function clearCart() {
  cartState.cartItems = [];
  updateTotalItems();
  console.log("Корзина очищена.");
  localStorage.removeItem('cartItems'); // Удаляем также из localStorage
}
