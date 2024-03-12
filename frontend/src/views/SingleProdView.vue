<template>
  <div class="container">
    <div class="row" v-if="product">
      <Card>
        <template #card-header>
          <h4 class="card-title">{{ product.prodName }}</h4>
        </template>
        <template #card-body>
          <img :src="product.prodURL" alt="hijab" />
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            R{{ product.amount }}
          </p>
          <button class="btn" @click="Purchase">Purchase now</button>
          <button class="btn">
            <a href="../views/ProductsView.vue">Back to Products</a>
          </button>
        </template>
      </Card>
    </div>
    <div class="row" v-else>
      <p class="lead">Loading...</p>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";
export default {
  components: {
    card,
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params);
  },
  methods: {
    Purchase() {
      alert("Item purchased!");
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
a {
  text-decoration: none;
  color: inherit;
}
.btn {
  border-radius: 30px;
  color: #fff;
  padding: 10px;
  margin: 10px;
  background-color: #4e96d3;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: 0.4s;
}
.btn:hover {
  background-color: #1d3557;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
  margin: 10px;
}
</style>