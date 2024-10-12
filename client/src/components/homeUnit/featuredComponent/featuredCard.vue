<template>
  <div class="card">
    <div class="text">
      <UiBadge 
        style="white-space: nowrap; width: fit-content"
        :title="titleH3"
        :styleBadge="badgeStyles"/>
      <h1>{{ titleH1 }}</h1>
    </div>
    <div class="container">
      <h4>{{ description }}</h4>
      <div class="information">
        <InfoBlock :info="info1" :svgColor="svgColor" :badgeStyles="badgeStyles" />
        <InfoBlock :info="info2" :svgColor="svgColor" :badgeStyles="badgeStyles" />
        <InfoBlock :info="info3" :svgColor="svgColor" :badgeStyles="badgeStyles" />
      </div>
    </div>
    <router-link to="/shop">
      <div class="btn" :style="buttonStyles">
        To Shop
      </div>
    </router-link>
  </div>
</template>

<script>
import InfoBlock from './unit/infoBlock.vue';
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'FeaturedCard',
  components: {
    InfoBlock,
    UiBadge,
  },
  props: {
    titleH3: {
      type: String,
      default: ''
    },
    titleH1: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    info1: {
      type: String,
      default: ''
    },
    info2: {
      type: String,
      default: ''
    },
    info3: {
      type: String,
      default: ''
    },
    buttonColor: {
      type: String,
      default: '#52A8FF'
    },
    svgColor: {
      type: String,
      default: '#52A8FF'
    },
    badgeStyles: {
      type: String,
      default: 'badge1'
    }
  },
  computed: {
    buttonStyles() {
      return {
        width: '100%',
        padding: '4px 0',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 'medium',
        backgroundColor: this.buttonColor,
        borderRadius: '2px',
        color: 'black'
      };
    }
  }
};
</script>

<style scoped>
  .card {
    padding: 1rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 280px;
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.151);
    background-color: white;
    transition: 0.3s ease;
    animation: apper linear;
    animation-timeline: view();
    animation-range: entry 0 cover 15%;
  }

  .text, .container, .information {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1, h3 {
    color: black;
  }
  
  h4 {
    color: rgb(39, 39, 39);
    font-weight: 300;
  }

  
  @keyframes apper {
    from {
      opacity: 0.1;
      scale: 0.5;
    }
    20% {
      opacity: 0.1;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @media all and (max-width: 1680px) {
    .card {
      width: 340px;
    }
  }
  @media all and (max-width: 1040px) {
    .card {
      width: 265px;
    }
  }
</style>
