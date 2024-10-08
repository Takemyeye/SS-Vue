<template>
  <div class="absolut">
      <div class="panel">

        <font-awesome-icon icon="xmark" 
          style="font-size: 24px; color: black; cursor: pointer; position: absolute; right: 10px; top: 10px;" 
          @click="toggleBar"/>

        <div class="text">
          <h2>Write New Bio</h2>
          <h5>Tell us about yourself in a few words</h5>
        </div>

        <div class="example">
          <h2>Example:</h2>
          <h5>Coffee enthusiast ☕ | World traveler 🌍 | Nature lover 🌿 | Passionate about photography 📸 and exploring hidden gems around the globe.</h5>
        </div>

        <div class="text">
          <textarea 
            v-model="newBio" 
            placeholder="I love..." 
            rows="3" 
            :maxlength="160"
            @input="checkLength"
          ></textarea>
          <h5>{{ bioLength }}/160 characters</h5>
        </div>

        <UiButton buttonText="Save Bio" @click="updateBio" />
        
      </div>
  </div>
  </template>
  
<script>
  import useUserStore from '@/stores/userStore';
  import UiButton from '@/ui/button.vue';
  import { computed, ref } from 'vue';
  
  export default {
      name: 'HoverBioPanel',
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
          const newBio = ref('');
          
          const userBio = computed(() => {
              return user.value?.bio || 'No bio available';
          });
  
          const bioLength = computed(() => newBio.value.length);
  
          const updateBio = async () => {
            if (!newBio.value.trim()) {
              alert('Bio cannot be empty!');
              return;
            }

              props.toggleBar(); // Close the panel after saving
              const token = localStorage.getItem('token');
              const response = await fetch('http://localhost:3000/api/update-user', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                  },
                  body: JSON.stringify({ bio: newBio.value })
              });
  
              const data = await response.json();
              if (response.ok) {
                  user.value.bio = newBio.value;
              } else {
                  console.error('Error updating bio:', data.message);
              }
          };
  
          return {
              userBio,
              newBio,
              updateBio,
              bioLength,
          }
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

  .example {
    text-wrap: balance;
  }

  .text {
    width: 100%;
    display: flex;
    align-content: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  textarea {
    max-width: 95%;
    min-width: 95%;
    max-height: 100px;
    min-height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.315);
    border-radius: 4px;
    padding: 4px 2.5%;
    outline: none;
    overflow: hidden;
  }
</style>