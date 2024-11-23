<template>
  <HeaderAdmin />
  <div class="main-block">
    <div class="product-block">
      <div class="text">
        <h2>Products</h2>
        <h5>Manage your store's products</h5>
      </div>
      <ProductAdmin
        :id="'Id'"
        :src="'Image'"
        :price="`Price`"
        :category="'Category'"
        :stock="'Stock'"
        :actions="'Actions'"
      />

      <ProductAdmin
        v-for="(image, index) in images"
        :key="index"
        :id="image.id"
        :src="image.image"
        :price="`${image.price} €`"
        :category="image.titleAnime"
        :stock="'~~'"
        :actions="'~~'"
      />
    </div>
  </div>
</template>

<script>
import ProductAdmin from './unit/productAdmin.vue';
import useImageStore from '@/stores/useImageStore';
import HeaderAdmin from '../serchAdmin.vue';

export default {
  name: 'ProductsAdmin',
  components: {
    ProductAdmin,
    HeaderAdmin,
  },
  setup() {
    const { fetchImages, images } = useImageStore();

    fetchImages().then(() => {
      console.log('Fetched images:', images.value);
    }).catch(error => {
      console.error('Error fetching images in component:', error);
    });

    return {
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
  .text {
    width: 100%;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }
</style>