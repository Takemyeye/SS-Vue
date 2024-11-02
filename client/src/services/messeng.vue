  <template>
    <div class="messeng">
      <WrapperMessange  @close-messenger="$emit('close-messenger')"/>
      <MessengerBlock/>
    </div>
  </template>

  <script>
  import MessengerBlock from './unit/messengBlock.vue';
  import WrapperMessange from './unit/wrapper.vue';

  export default {
    name: 'MessengBlock',
    components: {
      WrapperMessange,
      MessengerBlock,
    },
  }
  </script>

<style scoped>
  .messeng {
    font-family: var(--text-font-family);
    font-optical-sizing: var(--text-font-optical-sizing);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-style);
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    height: 550px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.479);
    padding: 8px;
    border-radius: 1rem;
    z-index: 1000;
    animation: opacity 0.3s ease forwards;
  }

@media all and (max-width:768px) {
  .messeng {
    max-width: 300px;
  }
}
@media all and ( max-width: 350px) {
  .messeng {
    right: 8px;
    max-width: 290px;
    height: 80vh;
  }
}

</style>