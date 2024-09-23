<template>
    <div class="info">
        <h2>Bio</h2>
        <h5>{{ userBio }}</h5>
        <UiBadge 
            style="font-size: small; cursor: pointer;"
            styleBadge="badge2"
            title="Change Bio" 
            @click="toggleBar"
        />
        <HoverBioPanel v-if="isBarOpen" :toggleBar="toggleBar"/>
    </div>
</template>

<script>
import HoverBioPanel from './hoverBioPanel.vue';
import useUserStore from '@/stores/userStore';
import UiBadge from '@/ui/badge.vue';
import { computed, ref } from 'vue';
  
export default {
    name: 'UserBioPanel',
    components: {
        HoverBioPanel,
        UiBadge,
    },
    setup() {
        const { user } = useUserStore();

        const isBarOpen = ref(false);
        const userBio = computed(() => {
              return user.value?.bio || 'No bio available';
          });

        const toggleBar = () => {
            isBarOpen.value = !isBarOpen.value;
        };

        return {
            toggleBar,
            isBarOpen,
            userBio
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