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
import UiBadge from '@/ui/badge.vue';
import HoverBioPanel from './hoverBioPanel.vue';
import { ref } from 'vue';
  
export default {
    name: 'UserBioPanel',
    components: {
        HoverBioPanel,
        UiBadge,
    },
    setup() {
        const isBarOpen = ref(false);

        const toggleBar = () => {
            isBarOpen.value = !isBarOpen.value;
        };

        return {
            toggleBar,
            isBarOpen
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