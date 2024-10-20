<template>
  <div class="cardUnit">
    <FeaturedCard
      titleH3="To 10 €"
      titleH1="Pencil"
      description="Elegant black-and-white drawings that capture simplicity and depth, perfect for clean, refined style."
      info1="Classic charm"
      info2="Affordable beauty"
      info3="Timeless appeal"
      buttonColor="#3498db"
      svgColor="#2980b9"
      :badgeStyles="`badge1`"
    />
    <FeaturedCard
      titleH3="To 18 €"
      titleH1="Ink"
      description="Detailed ink works emphasizing sharp lines and bold contrasts for a striking visual experience."
      info1="Bold precision"
      info2="Sharp contrasts"
      info3="Collector's choice"
      buttonColor="hsl(275, 80%, 71%)"
      svgColor="hsl(275, 80%, 71%)"
      :badgeStyles="`badge2`"
    />
    <FeaturedCard
      titleH3="To 18 €"
      titleH1="Colored"
      description="Vibrant artworks that burst with color, bringing dynamic energy to characters and scenes."
      info1="Vivid tones"
      info2="Energetic designs"
      info3="Full of life"
      buttonColor="hsl(39, 90%, 50%)"
      svgColor="hsl(39, 90%, 50%)"
      :badgeStyles="`badge5`"
    />
    <FeaturedCard
      titleH3="To 18 €"
      titleH1="Digital Art"
      description="Modern creations using advanced digital tools, blending innovation with creativity for stunning visuals."
      info1="Innovative designs"
      info2="High-definition quality"
      info3="Limitless possibilities"
      buttonColor="hsl(358, 100%, 69%)"
      svgColor="hsl(358, 100%, 69%)"
      :badgeStyles="`badge4`"
    />
  </div>
</template>

<script>
import FeaturedCard from './featuredCard.vue';

export default {
  name: 'CardUnit',
  components: {
    FeaturedCard
  }
}
</script>

<style scoped>
.cardUnit {
  width: 80%;
  position: relative; 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  gap: 1rem;
}

.cardUnit:hover .card:not(:hover) {
  filter: blur(3px);
  transform: scale(0.9);
  z-index: 0; 
}

.card:hover {
  transform: scale(1.08);
  z-index: 10; 
}

@media all and (max-width: 1680px) {
  .cardUnit {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (max-width: 768px) {
  .cardUnit {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>
