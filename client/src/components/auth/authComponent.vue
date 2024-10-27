<script>
import { computed, onMounted } from 'vue';
import auth from '@/private/auth'; 

export default {
  setup() {
    const { user, getUserFromCode } = auth;

    onMounted(() => {
      const queryParameters = new URLSearchParams(window.location.search);
      const code = queryParameters.get('code');

      if (code && !user.value) {
        getUserFromCode(code);
      }
    });

    return {
      user
    };
  },
};
</script>