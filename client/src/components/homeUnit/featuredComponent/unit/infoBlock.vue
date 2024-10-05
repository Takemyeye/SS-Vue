<template>
  <div class="block">
    <svg :fill="svgColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
      <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" font-family="none" font-weight="none" font-size="none" text-anchor="none">
        <g transform="scale(8.53333,8.53333)">
          <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-2.17938 -0.59,-4.21686 -1.60547,-5.97852l-11.24805,11.24609c-0.187,0.187 -0.44103,0.29297 -0.70703,0.29297c-0.265,0 -0.52003,-0.10497 -0.70703,-0.29297l-4.45313,-4.45312c-0.391,-0.391 -0.391,-1.02306 0,-1.41406c0.391,-0.391 1.02306,-0.391 1.41406,0l3.74609,3.74609l10.80078,-10.80078c-2.201,-2.655 -5.52223,-4.3457 -9.24023,-4.3457z"></path>
        </g>
      </g>
    </svg>
    <UiBadge 
      style="white-space: nowrap; width: fit-content"
      :title="info"
      :styleBadge="badgeStyles"
    />
  </div>
</template>

<script>
import UiBadge from '@/ui/badge.vue';

export default {
  name: 'InfoBlock',
  components: {
    UiBadge
  },
  props: {
    info: {
      type: String,
      required: true
    },
    svgColor: {
      type: String,
      default: '#52A8FF'
    },
    badgeStyles: {
      type: String,
      default: 'badge1'
    }
  }
};
</script>

<style scoped>
  .block {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 6px;
  }
</style>