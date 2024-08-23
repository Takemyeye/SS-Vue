<template>
  <SiteHeader/>
  <LoginCard/>
  <SiteFooter/>
</template>

<script>
import SiteHeader from '@/components/header/header.vue'
import SiteFooter from '@/components/footer/footer.vue'
import LoginCard from '@/private/component/login.vue'

export default {
  name: 'RegisterPage',
  components: {
    SiteHeader,
    LoginCard,
    SiteFooter,
  },
};
</script>
