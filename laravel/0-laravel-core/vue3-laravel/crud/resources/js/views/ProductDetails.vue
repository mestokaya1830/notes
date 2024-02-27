<script setup>
import axios from "../models/axios.js";
</script>
<template>
  <div>
    <h2>Products Details</h2>

    <table border>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        <tr>
          <td>{{ product.id }}</td>
          <td><input type="text" v-model="product.name"></td>
          <td><input type="text" v-model="product.price"></td>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent="updateProduct()">
      <input type="submit" value="Update" id="submit"/>
    </form>
  </div>
</template>

<script>
export default {
  name:'Product Details',
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      await axios
        .get("/products/" + this.$route.params.id)
        .then((result) => {
          this.product = result.data;
        })
        .catch((err) => console.warn(err));
    },
    async updateProduct() {
      await axios
        .put("/products/" + this.$route.params.id, this.product)
        .then((result) => {
          this.getProduct();
        })
        .catch((err) => console.warn(err))
        .finally(() => console.log("Product Updated"));
    },
  },
};
</script>

<style scoped>
  #submit{
    width:355px;
    margin-top:10px;
  }
</style>
