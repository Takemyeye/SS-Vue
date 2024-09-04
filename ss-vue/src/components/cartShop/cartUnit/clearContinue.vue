<template>
  <div class="choise">
    <h2>Your Cart</h2>
    <div class="container">
      <div class="continue" @click="toggleBlock">
        Continue
      </div>
      <div class="remove" @click="clearCart">
        Remove All
      </div>
    </div>
    <div class="block" v-if="showBlock">
      <div class="block-container">
        <h1>
          Payments Methods 
          <font-awesome-icon icon="circle-xmark" @click="toggleBlock" style="cursor: pointer;"/>
        </h1>
        <div class="fisic">
          <div class="title">
            <font-awesome-icon icon="money-bill" /> 
            Fisical Method
          </div>
          <input type="text" class="country" placeholder="Select Your Country">
          <UiButton buttonText="Process" @click="processOrder"/>
        </div>
        <div class="paypal">
          <div class="title">
            <font-awesome-icon icon="fa-brands fa-paypal" />
            Paypal Method
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue';
import { clearCart } from '@/services/activeContext';

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token') || null; // Получаем токен напрямую из localStorage
};

export default {
  name: 'ClearContinue',
  components: {
    UiButton,
  },
  data() {
    return {
      showBlock: false,
      token: null,
    };
  },
  created() {
    this.token = getTokenFromLocalStorage(); // Сохраняем токен в переменную

    if (!this.token) {
      console.error('Токен не найден в localStorage');
    }
  },
  methods: {
    clearCart() {
      clearCart(); // Используем метод clearCart из activeContext
      localStorage.removeItem('cartItems'); // Удаляем корзину из localStorage
    },
    toggleBlock() {
      this.showBlock = !this.showBlock;
    },
    async processOrder() {
      const token = localStorage.getItem('token'); // Получаем токен из localStorage

      if (!token) {
        console.error('Token not found in localStorage');
        return;
      }

      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      if (cartItems.length === 0) {
        alert('Cart is empty, WTF are you doing?');
        return;
      }

      const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

      try {
        const response = await fetch('http://localhost:3000/api/userCart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token, // Передаем токен в теле запроса
            cartItems,
            totalPrice,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to process order');
        }

        const data = await response.json();
        console.log('Order processed successfully:', data);
        this.clearCart(); 
      } catch (error) {
        console.error('Error processing order:', error);
      }
    }
  },
};
</script>

<style scoped>
  .choise {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
}

.continue, .remove {
  min-width: 100px;
  padding: 6px 0;
  border-radius: 8px;
  font-size: clamp(12px, 2vw, 14px);
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease;
  text-align: center;
}

.continue {
  background-color: white;
  border-color: black;
  color: black;
}

.continue:hover {
  color: white;
  background-color: black;
}

.remove {
  color: white;
  background-color: black;
}

.remove:hover {
  background-color: rgb(43, 43, 43);
}

.block {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.233);
  backdrop-filter: blur(2px);
  z-index: 1;
}

.block-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.164);
  animation: fadeInUp 0.5s ease-in-out forwards;
}

.fisic, .paypal {
  text-align: center;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  font-size: clamp(14px, 2vw, 18px);
}

.country {
  border: 1px solid rgba(0, 0, 0, 0.164);
  border-radius: 6px;
  font-size: 14px;
  height: 2rem;
  width: 100%;
  padding: 1%;
  transition: border-color 0.3s ease;
  outline: none;
}
.country:focus {
  border: 1px solid rgba(0, 0, 0, 0.507);
}
</style>