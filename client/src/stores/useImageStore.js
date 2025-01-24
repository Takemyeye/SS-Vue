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

const hasImagesInCache = () => {
  return images.value.length > 0; 
};

const fetchImages = async () => {
  if (hasImagesInCache()) return;


  try {
    const response = await fetch('http://soulswap.store/api/images');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    images.value = data; 
    filterImagesByCategory();
  } catch (error) {
    console.error('Error fetching images:', error);


  }
};

const filterImagesByCategory = () => {
  const categories = Object.keys(filteredImages.value);
  filteredImages.value = categories.reduce((acc, category) => {
    acc[category] = images.value.filter(image => 
      image.titleAnime === category || category === 'All'


    );
    return acc;
  }, {});

};

export default function useImageStore() {
  return {
    images,
    filteredImages,
    fetchImages,
    filterImagesByCategory,
    hasImagesInCache, 
  };
}
