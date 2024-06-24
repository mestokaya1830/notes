<script setup>
  import axios from '../models/axios.js';
</script>
<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct()">
      <input type="text" v-model="product.name" placeholder="Name" />
      <input type="text" v-model="product.price" placeholder="Price" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
export default {
  name:'Add Product',
  data() {
    return {
      product: {
        name: "",
        price: null,
      },
    };
  },
  methods: {
    async addProduct() {
      await axios.post('/products',this.product)
      .then(result => {
        this.$router.push('Products')
      })
      .catch(err => console.warn(err))
      .finally(() => console.log('Product Saved'))
    },
  },
};
</script>
