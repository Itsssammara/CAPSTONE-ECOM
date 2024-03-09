<template>
  <div class="home">
    <h1>home page</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    navigation,

  }
}
</script>

<style scoped>
.home {
  background-image: url('https://i.postimg.cc/J4KV8F7g/hoosenhijab3women.png');
  background-size: cover; /* Ensure the background image covers the entire area */
  background-position: center; /* Center the background image */
  min-height: 100vh; /* Set a minimum height to ensure content is visible */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1{
  font-family: monospace;
}
</style>