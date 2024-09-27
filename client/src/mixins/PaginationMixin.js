import { ref, computed, watch } from 'vue';

export default function usePagination(images, itemsPerPage) {
  const currentPage = ref(1);
  const filteredImages = ref(images);

  const paginatedImages = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredImages.value.slice(start, end);
  });

  function onPageChanged(newPage) {
    currentPage.value = newPage;
  }

  function setItemsPerPage(items) {
    itemsPerPage.value = items;
    currentPage.value = 1; 
  }

  watch(images, (newImages) => {
    filteredImages.value = newImages;
    currentPage.value = 1; 
  }, { immediate: true });

  return {
    paginatedImages,
    onPageChanged,
    setItemsPerPage,
    currentPage,
  };
}
