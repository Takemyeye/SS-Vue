<template>
  <div class="container">
      <UiCard
        style="cursor: pointer;"
        @click="navigateToOrder"
        :src="'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK12.jpg?alt=media&token=2e656d82-8221-4491-bbcc-34464e3f86d0'"
        :alt="'да ебанный рот'"
        :title="`Choso`"
        :subtitle="'The Enigmatic Cursed Womb: Loyalty and Unseen Depths.'"
        :showButton="false" 
      />
      <UiCard
        style="cursor: pointer;"
        @click="navigateToOrder"
        :src="'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK11.jpg?alt=media&token=66f69d8a-0756-412c-b9ec-cd0851cf4fb4'"
        :alt="'да ебанный рот'"
        :title="`Ryomen Sukuna`"
        :subtitle="'The King of Curses: Unmatched Power and a History of Malice.'"
        :showButton="false" 
      />
      <UiCard
        style="cursor: pointer;"
        @click="navigateToOrder"
        :src="'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK9.jpg?alt=media&token=fff0bba8-091b-40f1-9cad-00c6b5f1aec9'"
        :alt="'да ебанный рот'"
        :title="`Okkotsu Yuta`"
        :subtitle="'The Cursed Prodigy: Strength Drawn from Love.'"
        :showButton="false" 
      />
      <UiCard
        style="cursor: pointer;"
        @click="navigateToOrder"
        :src="'https://firebasestorage.googleapis.com/v0/b/cdnss-bb3ff.appspot.com/o/JJK3.jpg?alt=media&token=e123b5f8-a99b-49d3-ab69-a9067d5b7395'"
        :alt="'да ебанный рот'"
        :title="`Gojo Satoru`"
        :subtitle="'The Unrivaled Sorcerer: Limitless Power and Vision for a New Era.'"
        :showButton="false" 
      />
    </div>
</template>

<script>
import UiCard from '@/ui/card.vue';

  export default {
    name: 'FavoriteUnit',
    components: {
      UiCard
    },
    methods: {
      navigateToOrder() {
        this.$router.push('/shop');
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    row-gap: 2rem;
  }

  @media all and (max-width: 1810px) {
    .container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media all and (max-width: 1370px) {
    .favorite {
      width: 100%;
    }
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media all and (max-width: 600px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>