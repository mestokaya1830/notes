<template>
  <div>
    <ul>
      <li>
        <form @submit.prevent="updateProduct()">
          <input type="text" v-model="product.name" />
          <input type="text" v-model="product.price" />
          <input type="submit" value="Update" />
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Edit",
  data() {
    return {
      product:{
        name:'',
        price:''
      }
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      await axios.get("http://localhost:8000/api/products/" + this.$route.params.id).then((result) => {
        this.product = result.data;
      });
    },
    async updateProduct(){
      await axios.put("http://localhost:8000/api/products/" + this.$route.params.id, this.product).then(result => {
        alert('Updated')
        this.$router.push('/products')
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
