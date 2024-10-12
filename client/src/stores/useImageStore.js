import { ref } from 'vue';

const images = ref([]);
const filteredImages = ref({
  'All': [],
  'Jujutsu Kaisen': [],
  'Fire Force': [],
  'Call of Night': [],
  'My Hero Academia': [],
  'Sakamoto Days': []
});

let isFetching = false;

const hasImagesInCache = () => images.value.length > 0;

const fetchImages = async () => {
  if (hasImagesInCache() || isFetching) return; 
  isFetching = true;

  try {
    const response = await fetch('http://localhost:3000/api/images');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    images.value = data;
    categorizeImages(); // Сразу фильтруем изображения
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    isFetching = false;
  }
};

const categorizeImages = () => {
  const categories = Object.keys(filteredImages.value); // Получаем категории как ключи объекта
  const categorized = {};

  categories.forEach(category => {
    categorized[category] = images.value.filter(image =>
      category === 'All' || image.titleAnime === category
    );
  });

  filteredImages.value = categorized;
};

export default function useImageStore() {
  return {
    images,
    filteredImages,
    fetchImages,
    hasImagesInCache,
  };
}
