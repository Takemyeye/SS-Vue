<template>
  <div class="artistSpotlight">
    <div class="text">
      <h1>Artist Spotlight</h1>
      <h3>The Most Talented Manga Artists of All Time</h3>
    </div>
    <div class="container">
      <div class="image-container">
        <img class="img img1" src="img/jjkvol1.jpg" alt="хуйло">
        <img class="img img2" src="img/jjkvol4.jpg" alt="хуй">
      </div>
      <div class="description">
        <h2>Gege Akutami</h2>
        <h5>Gege Akutami is a rising star in the manga art world, known for her ethereal style and captivating character designs. With a passion for blending traditional Japanese art with modern manga techniques, Gege's work has garnered international acclaim.</h5>
        <UiButton 
        style="font-weight: 400;"
        :buttonText="`View Gege's Collection`"/>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/button.vue'

  export default {
    name: 'ArtistBlock',
    components: {
      UiButton
    }
  }
</script>

<style scoped>
  .artistSpotlight, .text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .artistSpotlight {
    background: linear-gradient(20deg, rgba(0, 174, 255, 0.26), rgba(255, 187, 0, 0.26));
    padding: 2.5rem 0;
    width: 100%;
    gap: 3rem;
  }

  .text {
    width: 80%;
    gap: 1rem;
  }
  
  .container {
    width: 60%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;
    padding: 2rem;
    gap: 1rem;
  }

  .image-container {
    width: 30%;
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
    width: 150px;
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

  .description {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

</style>