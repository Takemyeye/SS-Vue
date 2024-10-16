<template>
  <div class="absolut">
    <div class="panel">
      <font-awesome-icon icon="xmark" 
        style="font-size: 24px; color: black; cursor: pointer; position: absolute; right: 10px; top: 10px;" 
        @click="toggleBar"/>

      <h2>Set Your Nickname</h2>
      <h5>Choose a nickname that will be displayed to other users.</h5>

      <div class="text">
        <h3 style="color: black;">Nickname</h3>
        <textarea v-model="newNick" placeholder="change your nickname..." rows="3" :maxlength="20"></textarea>
        <h5>{{ nickLengh }}/20 characters</h5>
      </div>

      <UiButton buttonText="Change" @click="updateNick"/>
    </div>
  </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
import UiButton from '@/ui/button.vue';
import { computed, ref } from 'vue';

export default {
  name: 'HoverInfoPanel',
  components: {
    UiButton
  },
  props: {
    toggleBar: {
      type: Function,
      required: true
    }
  },
  emits: ['nickUpdated', 'error'], 
  setup(props, { emit }) {
    const { user } = useUserStore();
    const newNick = ref('');

    const nickLengh = computed(() => newNick.value.length);

    const updateNick = async () => {
      if (!newNick.value.trim()) {
        alert('Nickname cannot be empty!');
        return;
      }

      const token = localStorage.getItem('token');
      try {
        const response = await fetch('https://ss-vue-yf04.onrender.com/api/update-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ nickname: newNick.value ? newNick.value.replace(/^@/, '') : null }) 
        });

        const data = await response.json();
        if (response.ok) {
          user.value.nickname = newNick.value.replace(/^@/, ''); 
          emit('nickUpdated', user.value.nickname); 
          props.toggleBar(); 
        } else if (response.status === 409) {
          emit('error', 'Nickname already exists'); 
        } else {
          console.error('Error updating nickname:', data.message);
          emit('error', data.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        emit('error', 'An error occurred while updating the nickname');
      }
    };


    return {
      newNick,
      updateNick,
      nickLengh,
    };
  }
}
</script>

<style scoped>
  .absolut {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 1000 !important;
  }
  .panel {
    position: relative;
    width: 289px;
    padding: 2rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.342);
    border-radius: 8px;
    animation: fadeInUp 0.5s ease forwards;
    gap: 2rem;
  }
  
  .panel::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 60px;
    border-radius: 100% 0 8px 0;
    background-color: black;
  }

  .text {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  textarea {
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    resize: none;
    width: 100%;
    padding: 4px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.37);
    font-size: 14px;
}
</style>