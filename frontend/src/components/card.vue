<template>
  <div v-if="product">
  <table class="table" v-if="product">
<thead>
  <tr>
    <th scope="col">Image</th>
    <th scope="col">Name</th>
    <th scope="col">Price</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody v-for="product in products" :key="product.prodID">
  <tr>
    <th scope="row"><img :src="product in prodUrl" alt="admin"></th>
    <td>{{ product.prodName }}</td>
    <td>{{product.prodAmount}}</td>
    <td></td>
    <td><button class="btn btn-dark">Edit</button></td>
    <td><button class="btn btn-dark">Delete</button></td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
  export default {
      components:{},
      computed:{
          products(){
              return this.$store.products;
          },
      },
        mounted(){
      this.$store.dispatch("fetchProducts");
      
  }
};

</script>

<style scoped>
  .card {
      width: 18rem;
      margin: .5rem;
  }
</style>