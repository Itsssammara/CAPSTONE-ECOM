<template>
  <div class="container">
      <div class="row">
          <div class="col">
              <input type="text" placeholder="Search product by name" class="form-control">
          </div>
          <div class="col">
              <button class="btn btn-success">Sorting by price</button>
          </div>
      </div>
      <div class="row" v-if="products">
          <Card v-for="product in products" :key="product.prodID">
              <template #card-header>
                  <h4 class="card-title">{{ product.prodName }}</h4>
              </template>
              <template #card-body>
                  
                  <img :src= "product.prodURL" alt="hijab">
                  <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                      R{{ product.amount }}
                  </p>
                  <router-link class="btn buttonPad" :to="{name: 'product', params: {id: product.prodID}}">View More</router-link>
              </template>
          </Card>
      </div>
      <div class="row" v-else>
          <p class="lead">Loading...</p>
      </div>
  </div>
</template>

<script>
import card from '@/components/card.vue';
export default {
  name: 'ProductsView',
  components: {
      card
  },
  computed:{
      products(){
          return this.$store.state.products
      }
  },
  mounted() {
      this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
img{
  width: 200px;
  aspect-ratio: 1/1.25;
}
.btn {
  border-radius: 30px;
  color: #fff;
  background-color: #e9abc4;
  font-size: 12px;
  border: none;
  cursor: pointer;
  transition: .4s;
}
.btn:hover{
  background-color: #e5799e;
  color: #fff;
  transition: 1s;
  padding: 10px;
  font-size: small;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 10px;
}
.card{
    margin: 20px auto;
    height: auto;
    border-radius: 15px;
}
.card:hover {
  border: none;
  box-shadow: 10px 5px 15px 0px #4E96D3;
}
.card-img-top {
  height: 160px;
  width: 18rem;
  display: flex;
  margin: auto;
}
</style>