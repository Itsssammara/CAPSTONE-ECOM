<template>
  <div class="container">
    <div class="title">
      <h1>Elevating Modesty, <br>Embracing Elegance...</h1>
      <router-link to="/products">
      <button class="big-button">Shop Now</button>
    </router-link>
    </div>
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
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 95vh; /* Adjust as needed */
  background-image: url('https://i.postimg.cc/J4KV8F7g/hoosenhijab3women.png');
  background-size: cover; /* Adjusts the background image to cover the entire container */
  background-position: center; /* Centers the background image */
}
.container .title h1 {
  color: white;
  font-size: 4rem;
  font-family: 'Pacifico';font-size: 60px;
  text-align: center; /* Center text horizontally */
  /* -webkit-text-stroke: 1px rgb(51, 18, 18); Border outline */
}

.container button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
}
.container button:hover {
  box-shadow: 0 0 10px white; /* Glow effect on hover */
}

@media (max-width: 390px) {
  .container .title h1 {
      font-size: 2.3rem;
      padding: 0.25rem;
    }
  }
</style>
