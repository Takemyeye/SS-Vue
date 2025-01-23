<template>
  <div class="dropdown">
    <router-link to="/">
      <h5>Home</h5>
      <h5><font-awesome-icon icon="fa-solid fa-house" /></h5>
    </router-link>
    <router-link to="/profile">
      <h5>Profile</h5>
      <h5><font-awesome-icon icon="fa-solid fa-users" /></h5>
    </router-link>
    <router-link to="/orders">
      <h5>Orders</h5>
      <h5><font-awesome-icon icon="fa-solid fa-store" /></h5>
    </router-link>
    <router-link to="/cart">
      <h5>Cart</h5>
      <h5><font-awesome-icon icon="fa-solid fa-cart-shopping" /></h5>
    </router-link>
    <h5 @click="logout">LogOut</h5>   
  </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
  export default {
    name: 'DropDown',
    setup() {
      const {user, clearUser} = useUserStore();
      const logout = clearUser;

      return { user, clearUser, logout }
    }
  }
</script>

<style scoped>
  .dropdown {
    position: absolute;
    bottom: -80%;
    right: 3rem;
    width: 150px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.164);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  a {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 3px 5%;
    transition: 0.5s ease;
    border-radius: 4px;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.089);
  }
</style>