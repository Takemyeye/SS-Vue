<script>
import { computed, onMounted } from 'vue';
import auth from '@/private/auth'; 

export default {
  setup() {
    const { user, getUserFromCode } = auth;

    const avatarUrl = computed(() => {
      if (user.value && user.value.avatar) {
        return `https://cdn.discordapp.com/avatars/${user.value.id}/${user.value.avatar}.png`;
      }
      return '';
    });

    onMounted(() => {
      const queryParameters = new URLSearchParams(window.location.search);
      const code = queryParameters.get('code');

      if (code && !user.value) {
        getUserFromCode(code);
      }
    });

    return {
      user,
      avatarUrl
    };
  },
};
</script>