<template>
  <div class="cardUnit">
    <UiCard 
      src="art/MHA1.JPG" 
      alt="Pencil Drawings" 
      title="Pencil Drawings" 
      subtitle="Explore the subtle beauty of pencil sketches"/>
      
    <UiCard 
      src="art/JJK12.JPG" 
      alt="Ink and Marker Art" 
      title="Ink and Marker Art" 
      subtitle="Detailed illustrations with ink and markers"/>

    <UiCard 
      src="art/CON2.JPG" 
      alt="Colored Artwork" 
      title="Colored Artwork" 
      subtitle="Vibrant and colorful creations"/>
  </div>
</template>

<script> 
import UiCard from '@/ui/card.vue';

export default {
  name: 'CardUnit',
  components: {
    UiCard
  }
}
</script>

<style scoped>
.cardUnit {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
}
</style>
