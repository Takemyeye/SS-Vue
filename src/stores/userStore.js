import { ref } from 'vue';

const user = ref(null);

const useUserStore = () => {
  const setUser = (newUser) => {
    user.value = newUser;
  };

  const clearUser = () => {
    user.value = null;
  };

  return {
    user,
    setUser,
    clearUser,
  };
};

export default useUserStore;
