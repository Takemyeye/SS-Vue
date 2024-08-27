import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
    itemCount: (state) => state.items.length,
  },
  actions: {
    addItem(item) {
      const existingItem = this.items.find(cartItem => cartItem.id === item.id);
      if (!existingItem) {
        this.items.push(item);
        this.syncWithLocalStorage(); // Синхронизируем с localStorage
      }
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
      this.syncWithLocalStorage(); // Синхронизируем с localStorage
    },
    clearCart() {
      this.items = [];
      this.syncWithLocalStorage(); // Синхронизируем с localStorage
    },
    setCart(items) {
      this.items = items;
      this.syncWithLocalStorage(); // Синхронизируем с localStorage
    },
    syncWithLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
    loadFromLocalStorage() {
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      if (storedCart && Array.isArray(storedCart)) {
        this.items = storedCart;
      }
    },
  },
});

