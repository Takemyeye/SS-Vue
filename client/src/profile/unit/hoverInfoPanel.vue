<template>
  <div class="absolut">
    <div class="panel">
      <font-awesome-icon icon="xmark" 
        style="font-size: 24px; color: black; cursor: pointer; position: absolute; right: 10px; top: 10px;" 
        @click="toggleBar"/>
      <h2>New Nick Name</h2>
      <textarea v-model="newNick" placeholder="change your nickname..." rows="3"></textarea>
      <h5>{{ nickLengh }}/20 characterrs</h5>
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
    setup(props) {
      const { user } = useUserStore();
      const newNick = ref('');

      const userNick = computed(() => {
        return user.value?.nick || 'No bio available';
      });

      const nickLengh = computed(() => newNick.value.length);

      const updateNick = async () => {
      props.toggleBar(); // Close the panel after saving
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/update-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ nickname: newNick.value ? newNick.value.replace(/^@/, '') : null }) // destroy @ if @ was added
      });

      const data = await response.json();
      if (response.ok) {
        user.value.nickname = newNick.value.replace(/^@/, ''); // refresh 
        console.log('Nickname updated:', data.user);
      } else {
        console.error('Error updating nickname:', data.message);
      }

    };
    return {
      userNick,
      newNick,
      updateNick,
      nickLengh,
    }
    }
  }
</script>

<style scoped>
  .absolut {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
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
    gap: 2rem;
  }
  
  textarea {
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    resize: none;
    width: 250px;
    padding: 4px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.37);
    font-size: 14px;
}
</style>