<template>
  <div class="image-container">
    <img class="img img1" src="img/jjkvol1.jpg" alt="хуйло">
    <img class="img img2" src="img/jjkvol4.jpg" alt="хуй">
  </div>
</template>

<script>
  export default {
    name: 'ImageContainer'
  }
</script>

<style scoped>
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;
    scale: 1;
  }

  .image-container:hover {
    transform: scale(1.2);
  }

  .image-container:hover > .img2 {
    transform: rotate(5deg) translateX(-50px)  translateY(10px);
    scale: 1;
  }

  .image-container:hover > .img1 {
    transform: rotate(-2deg)  translateY(10px);
    scale: 1;
  }

  .img {
    position: relative;
    max-width: 150px;
    object-fit: contain;
    transition: 0.5s ease;
  }


  .img1 {
    z-index: 1;
  }

  .img2 {
    transform: rotate(10deg) translateX(-100px) translateY(20px);
    z-index: 0;
  }

  @media all and (max-width: 425px) {
    .img {
      width: 120px;
    }
  }

</style>