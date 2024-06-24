<script setup>
import axios from "../models/axios.js";
</script>
<template>
  <div>
    <h2>Products Page</h2>

    <table border>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><router-link :to="'/products/' + item.id">Details</router-link></td>
          <td><input type="button" value="Delete" @click="deleteProduct(item.id)"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name:'Products',
  data() {
    return {
      products: {},
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      await axios.get("/products").then((result) => {
        this.products = result.data;
      });
    },
    async deleteProduct(id) {
      await axios.delete("/products/" + id)
      .then((result) => {
        this.products = result.data;
      })
      .catch(err => console.warn(err))
      .finally(() => console.log('Product Deleted'))
    }
  },
};
</script>
