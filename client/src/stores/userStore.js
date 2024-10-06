import { ref } from 'vue';

const user = ref(null);

const useUserStore = () => {
  const setUser = (newUser) => {
    user.value = newUser;
  };

  const clearUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userStatus');
    localStorage.removeItem('selectedMood');
    window.location.href = '/';
    user.value = null;
  };

  return {
    user,
    setUser,
    clearUser,
  };
};

export default useUserStore;
