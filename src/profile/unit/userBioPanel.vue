<template>
    <div class="info">
      <h2>Bio</h2>
        <h5>{{ userBio }}</h5>
        <UiBadge 
          style="font-size: small; cursor: pointer;"
          styleBadge="badge2"
          title="Change Bio" 
          @click="updateBio"
        />
        <textarea data-v-06268d9a v-model="newBio" placeholder="bio..." rows="3"></textarea>
    </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
import UiBadge from '@/ui/badge.vue';
import { computed, ref } from 'vue';

    export default {
        name: 'UserBioPanel',
        components: {
            UiBadge
        },
        setup() {
            const { user } = useUserStore();

            const newBio = ref('');
            const userBio = computed(() => {
                return user.value?.bio || 'No bio available';
            });

            const updateBio = async () => {
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
                console.log('Bio updated:', data.user);
                user.value.bio = newBio.value;
            } else {
                console.error('Error updating bio:', data.message);
            }
            };
            return {
                userBio,
                newBio,
                updateBio,
            }
        }
    }
</script>

<style scoped>
    .info {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  h2 {
    font-weight: 600;
  }
</style>