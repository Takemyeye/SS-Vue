<template>
  <div>
    <a :href="discordAuthUrl"><h1>Register</h1></a>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      discordAuthUrl: `https://discord.com/oauth2/authorize?client_id=1274555710423695472&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=email+identify+guilds`,
    };
  },
};
</script>

<style>

</style>