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
      discordAuthUrl: `https://discord.com/oauth2/authorize?client_id=1271885463053140051&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&scope=guilds+identify+email`,
    };
  },
};
</script>

<style>

</style>