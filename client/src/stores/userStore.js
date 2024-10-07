import { ref } from 'vue';

const user = ref(null);

const useUserStore = () => {
  const setUser = (newUser) => {
    user.value = newUser;
  };

  const clearUser = () => {
    // remove Item from Local Storage
    localStorage.removeItem('selectedMood');
    localStorage.removeItem('userStatus');
    localStorage.removeItem('token');

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
