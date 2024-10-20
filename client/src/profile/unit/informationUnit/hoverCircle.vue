<template>
     <div class="circle">
        <div class="info">
            <div class="circle-status"></div> 
            <h5> {{ userStatus }} </h5>
        </div>
    </div>
</template>

<script>
import useUserStore from '@/stores/userStore';
import { computed } from 'vue';

    export default {
        name: 'HoverCircle',
        props: {
            title: {
                type: String,
                default: 'Latest update'
            }
        },
        setup() {
            const { user } = useUserStore();

            const userStatus = computed(() => {
                return user.value?.status || '';
            });

            return {
                userStatus,
            };
        }
        /* 
            Data convert format 2000/05/25/16:21
        
            const formatDate = (dateString) => {
                if (!dateString) return '';
                const date = new Date(dateString);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0'); 
                const minutes = String(date.getMinutes()).padStart(2, '0');
                return ` ${year}/${month}/${day}/${hours}:${minutes}`;
            };
        */
    }
</script>

<style scoped>
    .circle {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 60px;
        min-height: 60px;
        padding: 20px 0 0 20px;
        background-color: rgb(194, 194, 194);
        border-radius: 100% 0 0 0;
        opacity: 0;
        animation: fadeInUp 0.3s ease-in-out forwards;
        animation-delay: 1s;
        z-index: 2;
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 4px;
    }

    .info h5 {
        color: black;
        font-weight: 600;
    }

    .circle-status {
        background-color: rgb(34 197 94);
        width: 8px;
        height: 8px;
        border-radius: 20px;
    }
</style>
