<template>
    <div class="background-image">
      <img src="https://i.postimg.cc/J4KV8F7g/hoosenhijab3women.png" alt="">
      
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
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  margin-top: 80px;
}

.background-image {
  /* background-image: url('https://i.postimg.cc/J4KV8F7g/hoosenhijab3women.png'); */
  /* background-size: cover;
  background-position: center; */
  /* min-height: calc(100vh - 80px);  */
  /* width: 100%; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: monospace;
  color: #000000; /* Optional: Adjust font color */
  text-align: center; /* Center the text */
  margin-bottom: 20px; /* Optional: Adjust spacing */
}
</style>
