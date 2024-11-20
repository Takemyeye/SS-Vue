<template>
  <HeaderAdmin />
  <div class="main-block">
    <div class="product-block">
      <div class="text">
        <h1>Products</h1>
        <h5>залупа</h5>
      </div>
      <ProductAdmin />
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
      console.log('Fetched images in component:', images.value);
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
    gap: 2rem;
  }

  .product-block {
    width: 90%;
    height: 80%;
    padding: 2.5%;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.150);
    border-radius: 8px;
  }
</style>