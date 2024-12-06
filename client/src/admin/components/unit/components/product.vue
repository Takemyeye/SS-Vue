<template>
  <HeaderAdmin @search="setSearchQuery" />
  <div class="main-block">
    <div class="product-block">
      <div class="text">
        <h2>Products</h2>
        <h5>Manage your store's products</h5>
      </div>
      <ProductAdmin
        :id="'Id'"
        :src="'/img/brush.png'"
        :price="`Price`"
        :category="'Category'"
        :name="'Character'"
        :actions="'Actions'"
      />

      <ProductAdmin
        v-for="image in filteredProduct"
        :key="image.id"
        :id="image.id"
        :src="image.image"
        :price="`${image.price} €`"
        :category="image.titleAnime"
        :name="image.title"
        :actions="'~~'"
      />
    </div>
  </div>
</template>

<script>
import ProductAdmin from './unit/productAdmin.vue';
import useImageStore from '@/stores/useImageStore';
import HeaderAdmin from '../serchAdmin.vue';
import { ref, computed } from 'vue';

export default {
  name: 'ProductsAdmin',
  components: {
    ProductAdmin,
    HeaderAdmin,
  },
  setup() {
    const searchQuery = ref(''); // search string
    const { fetchImages, images } = useImageStore(); //cache

    fetchImages()
      .then(() => {
      })
      .catch((error) => {
        console.error('Error fetching images in component:', error);
      });

    // Filtring with Id and Category
    const filteredProduct = computed(() =>
      images.value.filter((image) => {
        const id = image.id?.toString() || '';
        const category = image.titleAnime?.toString() || '';
        const name = image.title?.toString() || '';
        const query = searchQuery.value.toLowerCase();

        return id.toLowerCase().includes(query) || category.toLowerCase().includes(query) || name.toLowerCase().includes(query);
      })
    );

    const setSearchQuery = (query) => {
      searchQuery.value = query.toLowerCase();
    };

    return {
      setSearchQuery,
      filteredProduct,
      images,
    };
  },
};
</script>

<style scoped>
  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    gap: 2rem;
  }

  .product-block {
    width: 90%;
    height: 80%;
    padding: 2.5%;
    background-color: white;
    border: 1px solid rgba(221, 221, 221, 0.15);
    border-radius: 8px;
    overflow-y: auto;
    scrollbar-width: 16px;
    scrollbar-color: rgb(158, 158, 158) white;
    scroll-behavior: smooth;
  }

</style>