<template>
  <div>
    <ul>
      <li>
        <form @submit.prevent="addProduct()">
          <input type="text" v-model="product.name" placeholder="Name" />
          <input type="text" v-model="product.price" placeholder="Price" />
          <input type="submit" value="Add" />
        </form>
      </li>
      <li v-for="(item, index) in products" :key="index">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.price }}</span>
        <span><nuxt-link :to="'/products/' + item.id">Edit</nuxt-link></span>
        <span><button @click="deleteProduct(item.id)">Delete</button></span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Products",
  data() {
    return {
      products: {},
      product:{
        name:'',
        price:''
      }
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      await axios.get("http://localhost:8000/api/products").then((result) => {
        this.products = result.data;
      });
    },
    async addProduct(){
      await axios.post("http://localhost:8000/api/products", this.product).then(result => {
        alert('Saved')
        this.getProducts()
      })
      .catch(err => console.log(err))
    },
    async deleteProduct(id){
      await axios.delete("http://localhost:8000/api/products/" + id, this.product).then(result => {
        alert('Deleted')
        this.getProducts()
      })
      .catch(err => console.log(err))
    }
  },
};
</script>
<style>
  ul{
    list-style: none;
    margin: 10px 0;
  }
  li{
    margin: 5px 0;
  }
  li > span{
    margin: 0 10px;
  }
</style>
