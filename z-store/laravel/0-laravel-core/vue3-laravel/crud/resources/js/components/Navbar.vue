<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/products">Products</router-link></li>
    <li><router-link to="/addproduct">Add Product</router-link></li>
  </ul>
</template>

<style>
  ul{
    display: flex;
    list-style: none;
  }
  ul > li{
    margin: 0 15px;
  }
</style>